// Funciones: Parámetros obligatorios, opcionales y por defecto

function activar(quien: string, momento?: string, objeto: string = 'batiseñal') {
    if (momento) {
        console.log(`${quien} activó la ${objeto} en la ${momento}.`)
    } else {
        console.log(`${quien} activó la ${objeto}.`)
    }
}

activar('Gordon', 'cueva')