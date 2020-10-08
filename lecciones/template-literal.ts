// Templates literales

function getEdad() {
    return 2020 - 1990
}

const nombre = "Ricardo"
const apellido = "Gauto"
const edad = 30

// const salida = nombre + apellido + edad
// const salida = nombre + " " + apellido + " (" + edad + ")"
const salida = `${nombre} ${apellido} (${getEdad()})`

console.log(salida)