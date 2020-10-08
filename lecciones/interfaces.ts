// Interfaces

interface Xmen {
    nombre: string,
    edad: number,
    poder?: string //opcional
}

const enviarMision = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la misión`)
}

const regresarAlCuartel = (xmen: Xmen) => {
    console.log(`${xmen.nombre} está regresando`)
}

const wolverine: Xmen = {
    nombre: 'Logan',
    edad: 35
}

enviarMision(wolverine)
regresarAlCuartel(wolverine)