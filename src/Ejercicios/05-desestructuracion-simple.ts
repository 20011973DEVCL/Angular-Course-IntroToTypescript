/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalle: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor : Reproductor = {
    volumen:65,
    segundo:36,
    cancion:"Vieja Julia",
    detalle:{
        autor:"Juanito Peña",
        anio:1996
    }
}

 console.log('el volumen es : ', reproductor.volumen);
 console.log('el segundo es : ', reproductor.segundo);
 console.log('la cancion es : ', reproductor.cancion);
 console.log('el autor es : ', reproductor.detalle.autor);

const {volumen: vol,segundo, cancion, detalle} = reproductor;
const { autor} = detalle;
 console.log('el volumen es : ', vol);
 console.log('el segundo es : ', segundo);
 console.log('la cancion es : ', cancion);
 console.log('el autor es : ', autor);


 const dbz: string[]= ['Goku', 'Vegeta', 'Trunks'];
 console.log('Personaje 1:', dbz[0]);
 console.log('Personaje 2:', dbz[1]);
 console.log('Personaje 3:', dbz[2]);

 const [, , p3] = dbz;
//  console.log('Personaje 1:', p1);
//  console.log('Personaje 2:', p2);
 console.log('Personaje 3:', p3);




