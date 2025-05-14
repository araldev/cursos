// En TypeScript, las aserciones de tipos son una forma de informar al compilador sobre el tipo de un valor. Permiten a los desarrolladores decir al compilador "confío en que este valor es de este tipo", incluso si el compilador no puede inferirlo o si no es seguro. Las aserciones de tipo no cambian el tipo real del valor en tiempo de ejecución. 

// Supongamos que queremos recuperar un elemento del DOM y sabemos que es un elemento HTMLCanvasElement, pero el compilador no puede inferirlo. Podemos usar una aserción de tipo para indicarle al compilador que lo trate como tal.

// En este momento TS no sabe que es un elemnto canvas, por lo tanto abrá que decirle que es un HTMLCanvasElement

// const canvas = document.getElementById('canvas')
// Esto porque el docment.getElementById, puede devolver un null si no lo encuentra, o un HTMLElement si lo encuentra, es por eso que tenemos que especificarlo, ya que por defecto será un HTMLEElement

// const canvas = document.getElementById('canvas') as HTMLCanvasElement

// Le estamos diciendo a TS que se fie de nosotros, por lo general lo mejor es hacer la aserción después de la comprobación

// const canvas = document.getElementById('canvas')
// if (canvas != null) {
//     const ctx = (canvas as HTMLCanvasElement).getContext('2d')
// }

// Pero esto no es suficiente, también deberiamos comprobar si canvas es una instancia de HTMLCanvasElement, ya que puede ser un HTMLElement, y no un HTMLCanvasElement

// Supongamos que nos equivocamos
// const canvas = document.getElementById('span')
// if (canvas != null && canvas instanceof HTMLCanvasElement) {
    // Si canvas es un HTMLCanvasElement, podemos usarlo como tal
//     const ctx = (canvas as HTMLCanvasElement).getContext('2d')
// }

// Pero al igual que Java, si se hace un instanceof no es necesaario indicar que canvas sera un HTMLCanvasElement, ya que TS ya lo sabe

// const canvas = document.getElementById('canvas')
// if (canvas != null && canvas instanceof HTMLCanvasElement) {
    // Si canvas es un HTMLCanvasElement, podemos usarlo como tal
    // const ctx = canvas.getContext('2d')
// }
// En este caso, TS ya sabe que canvas es un HTMLCanvasElement, por lo que no es necesario hacer la aserción de tipo.

// Todo esto por conceptos de inferencias

// De hecho instanceof ya que se encarga de verificar si es una instancia de HTMLCanvasElement no hace falta verificar si el elemento es null

const canvas = document.getElementById('canvas');
if (canvas instanceof HTMLCanvasElement) {
    // Si canvas es un HTMLCanvasElement, podemos usarlo como tal
    const ctx = canvas.getContext('2d');
}

// Bueno también es importante aclarar:
// typeof ---> Para tipos
// instanceof ---> Para instancias de clases
// as ---> Para aserciones de tipos