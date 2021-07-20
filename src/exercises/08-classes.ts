
/*
    ===== Código de TypeScript =====
*/

class NormalPerson{
    constructor(
        public name: string,
        public address: string
    ) {}
}

class Heroe extends NormalPerson{

    constructor(
            public alterEgo: string,
            public age: number,
            public realName: string
        ) {
            super( realName, 'NY' );
        }
}

const ironman = new Heroe('IronMan', 30, 'Tony');

console.log(ironman);