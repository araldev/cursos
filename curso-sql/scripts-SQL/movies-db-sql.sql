DROP DATABASE IF EXISTS movies_db;

-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS movies_db;

-- Usamos la base de datos
USE movies_db;

CREATE TABLE movies (
	movie_id BINARY(16) NOT NULL PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID(), 1)),
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    director VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    poster TEXT,
    rate DECIMAL(2, 1) UNSIGNED NOT NULL
);
    
CREATE TABLE genres (
	genre_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
    genre CHAR(50) UNIQUE NOT NULL
);

CREATE TABLE movie_genres (
	movie_id BINARY(16) NOT NULL,
    genre_id INT NOT NULL,
    FOREIGN KEY(movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genres(genre_id) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY(movie_id, genre_id)
);

INSERT INTO genres (genre)
	VALUES
    ('Drama'),
    ('Action'),
    ('Crime'),
    ('Adventure'),
    ('Sci-Fi'),
    ('Romance');
    
INSERT INTO movies ( movie_id, title, year, director, duration , poster, rate)
	VALUES
		(UUID_TO_BIN(UUID(), 1), "Interstellar", 1994, "Christopher Nolan", 180, "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_UF1000,1000_QL80_.jpg", 8.8),
        (UUID_TO_BIN(UUID(), 1), "The Matrix", 1994, "Lana Wachowski", 136, "https://i.ebayimg.com/images/g/QFQAAOSwAQpfjaA6/s-l1200.jpg", 8.7),
        (UUID_TO_BIN(UUID(), 1), "The Lion King", 1994, "Roger Allers, Rob Minkoff", 88, "https://m.media-amazon.com/images/I/81BMmrwSFOL._AC_UF1000,1000_QL80_.jpg", 8.5),
        (UUID_TO_BIN(UUID(), 1), "Jurassic Park", 1993, "Steven Spielberg", 127, "https://vice-press.com/cdn/shop/products/Jurassic-Park-Editions-poster-florey.jpg?v=1654518755&width=1024", 8.1);

-- Esto se hace para popular la base de datos, normalmente se selecciona la id
INSERT INTO movie_genres (movie_id, genre_id)
	VALUES
		( (SELECT movie_id FROM movies WHERE title = "Interstellar"), (SELECT genre_id FROM genres WHERE genre = "Adventure") ),
        ( (SELECT movie_id FROM movies WHERE title = "Interstellar"), (SELECT genre_id FROM genres WHERE genre = "Action") ),
        ( (SELECT movie_id FROM movies WHERE title = "Interstellar"), (SELECT genre_id FROM genres WHERE genre = "Sci-Fi") ),
        ( (SELECT movie_id FROM movies WHERE title = "The Matrix"), (SELECT genre_id FROM genres WHERE genre = "Action") ),
        ( (SELECT movie_id FROM movies WHERE title = "The Matrix"), (SELECT genre_id FROM genres WHERE genre = "Sci-Fi") ),
        ( (SELECT movie_id FROM movies WHERE title = "The Matrix"), (SELECT genre_id FROM genres WHERE genre = "Crime") ),
        ( (SELECT movie_id FROM movies WHERE title = "Jurassic Park"), (SELECT genre_id FROM genres WHERE genre = "Adventure") ),
        ( (SELECT movie_id FROM movies WHERE title = "Jurassic Park"), (SELECT genre_id FROM genres WHERE genre = "Romance") ),
        ( (SELECT movie_id FROM movies WHERE title = "Jurassic Park"), (SELECT genre_id FROM genres WHERE genre = "Drama") ),
        ( (SELECT movie_id FROM movies WHERE title = "The Lion King"), (SELECT genre_id FROM genres WHERE genre = "Adventure") ),
        ( (SELECT movie_id FROM movies WHERE title = "The Lion King"), (SELECT genre_id FROM genres WHERE genre = "Drama") );
        
        -- Vista para mostrar películas con géneros
CREATE VIEW movies_with_genres AS
SELECT 
	BIN_TO_UUID(m.movie_id) AS movie_id, -- Para recuperar el id en string y no en BINARY
    m.title,
    m.year,
    m.director,
    m.duration,
    m.poster,
    m.rate,
    GROUP_CONCAT(g.genre ORDER BY g.genre ASC SEPARATOR ', ') AS genres
FROM movies m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
GROUP BY m.movie_id;

-- Si ya existe el VIEW lo modificamos así
CREATE OR REPLACE VIEW movies_with_genres AS
SELECT 
	BIN_TO_UUID(m.movie_id) AS movie_id, -- Para recuperar el id en string y no en BINARY
    m.title,
    m.year,
    m.director,
    m.duration,
    m.poster,
    m.rate,
    GROUP_CONCAT(g.genre ORDER BY g.genre ASC SEPARATOR ', ') AS genres
FROM movies m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
GROUP BY m.movie_id;

-- Consultar
SELECT * FROM movies_with_genres;