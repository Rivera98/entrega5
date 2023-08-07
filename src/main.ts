const generarCartaAleatoria = (): number => Math.floor(Math,random() * 10);

const cartarParaAcertar: number = generarCartaAleatoria();

type Estado = 

"GAME_OVER_MAXIMA_PUNTUACION";


const GAME_OVER_MAXIMA_PUNTUACION = 7.5;

/* Mostrar puntuacion */

const MAXIMA_PUNTUACION: number = 7.5;
let Puntuacion : number = 0

const hasSuperadoLaPuntuacion = () : boolean =>
    Puntuacion >= MAXIMA_PUNTUACION;

const muestraPuntuacion = () => {
    const elementoRestultado = document.getElementById("resultado");

    if(elementoRestultado) {
        elementoRestultado.innerHTML = `${Puntuacion}`;
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
