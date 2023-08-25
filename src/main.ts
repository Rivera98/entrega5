let puntosTotales = 0;
const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10);
const generarCarta = (numeroAleatorio: number): number => {
    if(numeroAleatorio === 0){
        return 1;
    }
   return numeroAleatorio > 7 ? numeroAleatorio +2 : numeroAleatorio;
}

const pedirCarta = () => {
const numeroAleatorio = generarNumeroAleatorio();
const carta = generarCarta(numeroAleatorio);
mostrarImagen(carta);
const puntos = obtenerPuntos(carta);
puntosTotales = puntosTotales + puntos;
mostrarMensaje(`${puntosTotales}`);
comprobarPartida(puntosTotales);
deshabilitarBotonQuePasaria(true);
}

const obtenerUrlCarta = (Carta: number): string => {
    let urlImagen: string = "";
    switch (Carta){
        case 1: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        break;
        case 2: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        break;
        case 3: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        break;
        case 4: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        break;
        case 5: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        break;
        case 6: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        break;
        case 7: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        break;
        case 10: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break;
        case 11: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        break;
        case 12: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        break;
        default: 
        urlImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        break;
    }
    return urlImagen;
}

const mostrarImagen = (Carta: number) => {
    console.log (Carta);
const imagenCarta= document.getElementById("urlcarta");
    if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement){
    const urlcarta = obtenerUrlCarta(Carta);
    console.log(urlcarta);
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
        ganarPartida();

    } if (puntosTotales > 7.5){
        perderPartida();
        }
    }
const ganarPartida = () => {
    mostrarMensaje ("Has Ganado")
    deshabilitarBotonPedirCarta (true) 
}

const perderPartida = () => {
        deshabilitarBotonPedirCarta (true);
        mostrarMensaje ("Has perdido")
}
const deshabilitarBotonPedirCarta = (estadeshabilitado: boolean) => {
    const botonPedirCarta = document.getElementById("pedircarta");
            if(botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement){
                botonPedirCarta.disabled = estadeshabilitado;
            }
}


const botonPedirCarta = document.getElementById("pedircarta")
    if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement){
     botonPedirCarta.addEventListener("click", pedirCarta)   
    }

const nuevaPartida = () => {
    puntosTotales = 0;
    mostrarMensaje(`${puntosTotales}`);
    deshabilitarBotonPedirCarta(false);
    deshabilitarBotonMeRindo(false);
    deshabilitarBotonQuePasaria(true);
    mostrarImagen(0);
    }
       
const botonNuevaPartida = document.getElementById("nuevapartida")
    if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
     botonNuevaPartida.addEventListener("click", nuevaPartida)   
    }    

const meRindo = () => {
    mostrarMensaje(`${puntosTotales}`);
    opcionPuntos(puntosTotales); 
    deshabilitarBotonPedirCarta(true);
    deshabilitarBotonQuePasaria(false);
    comprobarPartida(puntosTotales);
          
}

const opcionPuntos = (puntosTotales: number) => {
    if(puntosTotales <= 4.5 ){
        mostrarMensaje ("Has sido muy conservador");
    } else if(puntosTotales <= 5.5){
        mostrarMensaje ("Te ha entrado el canguelo eh?");
    } else if(puntosTotales >= 6 && puntosTotales <= 7 ){
        mostrarMensaje ("Casi casi...");
    }else if(puntosTotales === 7.5 ){
        mostrarMensaje("¡ Lo has clavado! ¡Enhorabuena!");
    }
}

const botonMeRindo = document.getElementById("rendir")
    if (botonMeRindo !== null && botonMeRindo !== undefined && botonMeRindo instanceof HTMLButtonElement){
     botonMeRindo.addEventListener("click", meRindo)   
    } 

const quePasaria = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarCarta(numeroAleatorio);
    mostrarImagen(carta);
    const puntos = obtenerPuntos(carta);
    puntosTotales = puntosTotales + puntos;
    mostrarMensaje(`${puntosTotales}`);
    deshabilitarBotonPedirCarta(true);
    deshabilitarBotonMeRindo(true);
    deshabilitarBotonQuePasaria(true);
    
    
}
const deshabilitarBotonQuePasaria = (estadeshabilitado: boolean) => {
    const botonQuePasaria = document.getElementById("pasar");
            if(botonQuePasaria && botonQuePasaria instanceof HTMLButtonElement){
                botonQuePasaria.disabled = estadeshabilitado;
            }
}
const deshabilitarBotonMeRindo = (estadeshabilitado: boolean) => {
    const botonMeRindo = document.getElementById("rendir");
            if(botonMeRindo && botonMeRindo instanceof HTMLButtonElement){
                botonMeRindo.disabled = estadeshabilitado;
            }
}
const botonQuePasaria = document.getElementById("pasar")
    if (botonQuePasaria !== null && botonQuePasaria !== undefined && botonQuePasaria instanceof HTMLButtonElement){
     botonQuePasaria.addEventListener("click", quePasaria)   
    }     