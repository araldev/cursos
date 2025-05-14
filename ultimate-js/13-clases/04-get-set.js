class Restaurants {
    #timetable;
    constructor(name) {
        this.name = name;
    }

    get timetable() {
        return this.#timetable;
    }

    set timetable(value) {
        let date = new Date(value);
        let time = date.getTime();
        if (Number.isNaN(time)) {
            throw new Error('Fecha inválida');
        }
        this.#timetable = date;
    }
}

const r = new Restaurants('BBQ');

r.timetable = '1 Apr 1923';