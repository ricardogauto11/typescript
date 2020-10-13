const sumar = (a: number, b: number): number => a + b

const nombre = (): string => 'Hola Ricardo'

const obtenerSalario = ():Promise<string> => {
    return new Promise((res, rej) => {
        res('Hola')
    })
}

obtenerSalario().then(a => console.log(a.toUpperCase()))