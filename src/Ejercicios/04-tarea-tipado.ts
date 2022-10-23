/*
    ===== Código de TypeScript =====
*/

interface Direccion {
    calle: string;
    pais: string;
    ciudad:string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion : Direccion
    // direccion:{
    //     calle: string;
    //     pais: string;
    //     ciudad: string
    // };
    mostrarDireccion: ()=> string
}
const superHeroe: SuperHeroe = {
    nombre: 'Sofia',
    edad:35,
    direccion: {
        calle: 'Venetia',
        pais: 'Italia',
        ciudad: 'Napoles'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;

    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);