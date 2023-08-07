const generarCartaAleatoria = (): number => Math.floor(Math.random() * 10);

const cartarParaAcertar: number = generarCartaAleatoria();

type Estado = 

"GAME_OVER_MAXIMA_PUNTUACION"
"MENOR_CUATRO"
"ENTRE_CUATRO_y_SEIS"
"ENTRE_SEIS_Y_SIETE"
"SIETE_Y_MEDIA";


const GAME_OVER_MAXIMA_PUNTUACION = 7.5;

/* Mostrar puntuacion */

const MAXIMA_PUNTUACION: number = 7.5;
let Puntuacion : number = 0

const hasSuperadoLaPuntuacion = () : boolean =>
    Puntuacion >= MAXIMA_PUNTUACION;

const muestraPuntuacion = () => {
    const elementoResultado = document.getElementById("resultado");

    if(elementoResultado) {
        elementoResultado.innerHTML = `${Puntuacion}`;
    }else {
        console.error (
            "muestraPuntuacion: No se ha encontrado el elemento con id Puntuacion"
        );
    }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

/* Si te pasa de puntuacion Game over */

const gestionarGameOver = (estado: Estado) => {
    if (estado === "GAME_OVER_MAXIMA_PUNTUACION"){
        const elementoComprobar = document.getElementById ("comprobar");
        if(elementoComprobar && elementoComprobar instanceof HTMLButtonElement)
        elementoComprobar.disabled = true;
    } else {
        "gestionarGameOver: No se ha encontrado el elemento con id Comprobar"
    };

};

const muestraMensajeComprobacion = (texto: string, estado: Estado) => {
    let mensaje : string ="";
    switch (estado) {
        case "MENOR_CUATRO":
            mensaje = `Has sido muy conservador`;
            break;
        case "ENTRE_CUATRO_Y_SEIS":
            mensaje = `Te ha entrado el canguelo eh?`
            break;
        case "ENTRE_SEIS_Y_SIETE":  
            mensaje =  `"Casi casí..`
            break;
        case "SIETE_Y_MEDIA":  
            mensaje = `¡Lo has clavado! ¡Enohorabuena!`
            break;
        case "GAME_OVER_MAXIMA_PUNTUACION":
            mensaje = `Te has pasado. Game Over`
            break;
    }

    const elementoRestultado = document.getElementById("resultado");
    if(elementoRestultado) {
        elementoRestultado.innerHTML = mensaje;
    }else {
        console.error (
            "muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado"
        )

    }
}

