DROP DATABASE IF EXISTS twitter_db;

CREATE DATABASE twitter_db;

USE twitter_db;

CREATE TABLE IF NOT EXISTS users (
	user_id INT AUTO_INCREMENT,
    user_handle VARCHAR(50) NOT NULL UNIQUE,
    email_address VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phonenumber CHAR(10) UNIQUE,
    follower_count INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    PRIMARY KEY(user_id)
);

INSERT INTO users
	(user_handle, email_address, first_name, last_name, phonenumber)
VALUES 
	("midudev", "midu@gmail.com", "Miguel Ángel", "Durán", "655443322"),
    ("arturo", "arturo@gmail.com", "Arturo", "Alba", "655998877"),
    ("pheralb", "fer@gmail.com", "Fernando", "Astra", "655446622"),
    ("carmen", "carmen@gmail.com", "Carmen", "Lomana", "655113322"),
    ("paco", "paco@gmail.com", "Paco", "Barroso", "655447711"),
    ("carlos", "carlos@gmail.com", "Carlos", "Beltrán", "655773388");
    
CREATE TABLE IF NOT EXISTS followers (
	follower_id INT NOT NULL,
    following_id INT NOT NULL,
    FOREIGN KEY(follower_id) REFERENCES users(user_id),
    FOREIGN KEY(following_id) REFERENCES users(user_id),
    PRIMARY KEY (follower_id, following_id)
);

-- Desde la versión 8 de mySQL
-- Se pueden añadir constrains para hacer checks
ALTER TABLE followers
	ADD CONSTRAINT check_follower_id
    CHECK(follower_id != following_id);
  
/*
SELECT follower_id, following_id FROM followers;
SELECT follower_id FROM followers WHERE following_id = 3;
SELECT COUNT(follower_id) AS followers FROM followers WHERE following_id = 3;
*/

-- Top 3 usuarios con mayor número de seguidores
/*
SELECT user_handle, COUNT(follower_id) AS followers
FROM users
JOIN followers ON user_id = following_id
GROUP BY following_id
ORDER BY followers DESC
LIMIT 3;
*/
-- Top 3 usuarios con mayor número de seguidores
-- Tabla Completa
/*
SELECT users.user_id, users.user_handle, users.first_name, users.phonenumber,
following_id, COUNT(follower_id) AS followers
FROM users
JOIN followers ON user_id = following_id
GROUP BY following_id
ORDER BY followers DESC
LIMIT 3;
*/

CREATE TABLE IF NOT EXISTS tweets (
tweet_id INT NOT NULL AUTO_INCREMENT,
user_id INT NOT NULL,
tweet_text VARCHAR(280) NOT NULL,
num_likes INT NOT NULL DEFAULT 0,
num_retweets INT NOT NULL DEFAULT 0,
num_comments INT NOT NULL DEFAULT 0,
created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
FOREIGN KEY (user_id) REFERENCES users(user_id),
PRIMARY KEY(tweet_id)
);

INSERT INTO tweets (user_id, tweet_text)
VALUES
	(1, "Hola, soy un apasionado por la bicicleta"),
    (1, "Hola, soy el mismo otra vez"),
    (5, "Lorem impsum Hola"),
    (3, "Probando que la tabla vaya bien"),
    (2, "Hola, esto va fino"),
    (1, "Easy peasy lemon squeezy"),
    (4, "Pues con esto ya estaría");
    
-- Cuantos tweets ha hecho un usuario?
/*
SELECT users.user_id, users.user_handle, COUNT(tweet_text) AS tweet_count
FROM tweets
JOIN users ON users.user_id = tweets.user_id
GROUP BY user_id;
*/

-- Sub Consulta
-- Obtener los tweets de los usuarios que tienen más de 2 seguidores
/*
SELECT tweet_id, tweet_text, user_id
FROM tweets
WHERE user_id IN (
	SELECT following_id
	FROM followers
	GROUP BY following_id
	HAVING COUNT(follower_id) > 2
);
*/

CREATE TABLE tweet_likes (
	user_id INT NOT NULL,
	tweet_id INT NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	FOREIGN KEY(tweet_id) REFERENCES tweets(tweet_id) ON DELETE CASCADE, -- Si se borra un tweet se borran automáticamente sus likes
	PRIMARY KEY (user_id, tweet_id)
);

INSERT INTO tweet_likes ( user_id, tweet_id)
VALUES (1, 3), (2, 3), (1, 5), (1, 1), (5, 3), (5, 1), (3, 2), (3, 3);

-- DELETE
SET SQL_SAFE_UPDATES = 0; -- Para eliminar el modo safe update que te evita borrar o actualizar sin un WHERE
DELETE FROM tweets WHERE tweet_id = 1;
DELETE FROM tweets WHERE user_id = 3;

DELETE FROM tweets
WHERE tweet_text
LIKE "%fino%"
OR tweet_text LIKE "%ELon Musk%";

-- UPDATE
UPDATE tweets SET num_comments = num_comments + 1 WHERE tweet_id = 5;

-- reemplazar texto
UPDATE tweets SET tweet_text = REPLACE(tweet_text, "Hola", "Bonjour")
WHERE tweet_text LIKE "%Hola%";

-- Obtener el número de likes para cada tuit
/*
SELECT tweet_id, COUNT(user_id) AS like_count
FROM tweet_likes
GROUP BY tweet_id;
*/
-- Obtener likes y añadir el nombre del autor relacionando entri si 3 tablas
SELECT
    tl.tweet_id,
    u.user_handle AS author,
    COUNT(tl.user_id) AS like_count
FROM tweet_likes AS tl
LEFT JOIN tweets AS t ON tl.tweet_id = t.tweet_id
LEFT JOIN users AS u ON t.user_id = u.user_id
GROUP BY tl.tweet_id, u.user_handle
ORDER BY like_count DESC;

DROP TRIGGER IF EXISTS increase_follower_count;

-- Para cambiar el delimitador y que sepa cuando termina el trigger y cuando la sentencia de dentro
DELIMITER $$ 

/* TRIGGERS */
CREATE TRIGGER increase_follower_count
AFTER INSERT ON followers
FOR EACH ROW
BEGIN
  UPDATE users
  SET follower_count = follower_count + 1
  WHERE user_id = NEW.following_id; -- NEW para acceder al elemento que entra en el trigger
END$$
    
DELIMITER ;

DROP TRIGGER IF EXISTS decrease_follower_count;

DELIMITER $$ 

CREATE TRIGGER decrease_follower_count
AFTER DELETE ON followers
FOR EACH ROW
BEGIN
  UPDATE users
  SET follower_count = follower_count - 1
  WHERE user_id = NEW.following_id; 
END$$
    
DELIMITER ;
    
INSERT INTO followers (follower_id, following_id)
VALUES
	(1, 3),
    (1, 2),
    (1, 4),
    (2, 3),
    (2, 6),
    (1, 5),
    (6, 5),
    (5, 1),
    (2, 1),
    (4, 3);
    
SELECT * FROM users;