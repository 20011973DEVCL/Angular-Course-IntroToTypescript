/*
    ===== Código de TypeScript =====
*/

class PersonaNormal { 

    constructor(public nombre: string,
                public direccion: string)
                {}
} 

class Heroe extends PersonaNormal {
    constructor(public alterego: string,
                public edad: number,
                public nombreReal: string) {

                super(nombreReal, 'NY');
    }
}



const ironMan = new Heroe('IronMan', 45, 'Tony');

console.log(ironMan);