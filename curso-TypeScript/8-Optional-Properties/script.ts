// Los optional properties son propiedades que no son obligatorias en un objeto
// Se definen con el símbolo ? después del nombre de la propiedad

type Hero = {
    name: string;
    age: number;
    isActive?: boolean; // Propiedad opcional
}

// Use una función flecha para ejemplificar que no habría ningún problema
// En este caso isActive es True por defecto
const createHero = (hero: Hero): Hero => {
    const { name, age} = hero;
    return {name, age, isActive: true};
}

const hero1 = createHero({ name: 'Iron Man', age: 45 });