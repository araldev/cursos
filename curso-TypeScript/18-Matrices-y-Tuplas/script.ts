// Supongamos que queremos hacer un arrays de arrays

type CellValue = 'X' | 'O' | ' ';

// Pero supongamos que queremos limitarlo a que sea 3x3
// Usamos una tupla para definir el tamaño, una tupla es una arreglo que tiene un límite fijado de longitud
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', ' ', 'X']
]

// Una de las tuplas más usadas es la de React, que es la de useState
// type State = [string, (newName: string) => void];
// const [hero, setHero] = useState('thor')

// Los códigos RGB también son una tupla

type RGB = [number, number, number]
const rgb : RGB = [255, 0, 0] 