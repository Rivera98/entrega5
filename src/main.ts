let puntosTotales = 0;
const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10);
const generarCarta = (numeroAleatorio: number): number => {
   return numeroAleatorio > 7 ? numeroAleatorio +2 : numeroAleatorio;
}

const pedirCarta = () => {
const numeroAleatorio = generarNumeroAleatorio();
const carta = generarCarta(numeroAleatorio);
mostrarImagen(carta);
const puntos = obtenerPuntos(carta);
puntosTotales = puntosTotales + puntos;
mostrarMensaje(`${puntosTotales}`);


}

const obtenerUrlCarta = (Carta: number): string => {
    switch (Carta){
        case 1: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default: 
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
}

const mostrarImagen = (carta: number) => {
const imagenCarta= document.getElementById("urlcarta");
    if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement){
    const urlcarta = obtenerUrlCarta(carta);
    imagenCarta.src = urlcarta 
    }
}

const obtenerPuntos = (carta: number): number => {
    return carta > 7 ? 0.5 : carta;
}

const mostrarMensaje = (mensaje: string) => {
const divResultado= document.getElementById("resultado");    
    if(divResultado !== null && divResultado !== undefined && divResultado instanceof HTMLDivElement){
        divResultado.textContent = mensaje;
    }
}

const comprobarPartida = (puntosTotales: number) => {
    if(puntosTotales === 7.5){
        const divResultado= document.getElementById("resultado");    
        if(divResultado !== null && divResultado !== undefined && divResultado instanceof HTMLDivElement){
        divResultado.textContent = "Has ganado";
        }
    } if (puntosTotales > 7.5){
            const botonPedirCarta = document.getElementById("pedircarta");
            if(botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement){
                botonPedirCarta.disabled = true;
            }
        }
}
        
 

const botonPedirCarta = document.getElementById("pedircarta")
    if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement){
     botonPedirCarta.addEventListener("click", pedirCarta)   
    }