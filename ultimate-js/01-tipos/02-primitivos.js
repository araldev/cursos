let numero = 1;
let texto = "Hola Mundo";
let verdadero = true;
let falso = false;
let noDefinido;
let undef = undefined;
let nulo = null;

typeof 2n // bigint  / se usa para cálculos de alta precisión, como criptografía, IDs grandes, o datos financieros.
          // es un tipo de dato primitivo en JavaScript que permite trabajar con números enteros muy grandes, más allá del límite de Number.
          // 1️⃣ Añadiendo una n al final de un número entero
          // 2️⃣ Usando el constructor BigInt()

typeof Symbol() // symbol  / ej. se usa para crear claves privadas en objetos