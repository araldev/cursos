// Algo curioso es que podemos hacer clases abstractas en TS
abstract class Hero {
    private readonly name: string; // Así definimos una propiedad de solo lectura
    private age: number; // Volvemos el atributo privado
    private power: string;
    constructor(name: string, age: number, power: string) {
        this.name = name;
        this.age = age;
        this.power = power;
    }
    // Méteodos abstractos
    abstract attack() : void;
    abstract defend() : void;

    // setName(name: string) {
    //     this.name = name;
    // }
    getName() {
        return this.name;
    }
    setAge(age: number) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    setPower(power: string) {
        this.power = power;
    }
    getPower() {
        return this.power;
    }
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Power: ${this.power}`;
    }
}

interface HeroInterface {
    specialAttack(): void;
    specialDefend(): void;
    // También podríamos pasar atributos
}

class Avenger extends Hero implements HeroInterface {
    
    private rank: string;
    constructor(name: string, age: number, power: string, rank: string) {
        super(name, age, power);
        this.rank = rank;
    }
    // Implementación de los métodos abstractos
    attack() {
        console.log(`${this.getName()} attacks with ${this.getPower()}`);
    }
    defend() {
        console.log(`${this.getName()} defends with ${this.getPower()}`);
    }
    setRank(rank: string) {
        this.rank = rank;
    }
    getRank() {
        return this.rank;
    }
    toString() {
        return `${super.toString()}, Rank: ${this.rank}`;
    }
    // Implementación de los métodos de la interfaz
    specialAttack() {
        console.log(`${this.getName()} performs a special attack!`);
    }
    specialDefend() {  
        console.log(`${this.getName()} performs a special defense!`);
    }
}

// El private no se va transpilar en JS, si queremos ser más estrictos usariamos el # de JS

// Obviamente los encapsulamientos que hay son private, protected y public
// protected es para que las clases hijas puedan acceder a los atributos y métodos de la clase pedro

const ironMan = new Avenger("ironMan", 35, "suit", "A");
console.log(ironMan.toString());
ironMan.attack();
ironMan.defend();