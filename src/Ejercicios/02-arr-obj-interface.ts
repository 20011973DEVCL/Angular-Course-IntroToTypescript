/*
    ===== Código de TypeScript =====
*/

import { isConstructorDeclaration } from "typescript";

let habilidades: string[] = ['Bash', 'Counting', 'Healing'];

interface Personaje {
    nombre:string;
    hp:number;
    habilidades:string[],
    puebloNatal?:string;
}
const personaje: Personaje = {
    nombre: 'Strider',
    hp:100,
    habilidades: ['Bash', 'Counting', 'Healing']
}

personaje.puebloNatal = 'Chuchunco City';

console.table(personaje);