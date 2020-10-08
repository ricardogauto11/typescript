// Funciones de Flecha (Arrow Functions)

const miFuncion = function (a: string) {
    return a.toUpperCase()
}

const miFuncionF = (a: string) => a.toUpperCase()

const sumarN = function (a: number, b: number) {
    return a + b
}

const sumarF = (a:number, b:number) => a + b;

const personaje = {
    nombre: "Hulk",
    smash() {
        setTimeout(() => {
            console.log(`${this.nombre} smash!!!`)
        }, 1000)
    }
}

personaje.smash()