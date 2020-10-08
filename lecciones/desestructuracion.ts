// Desestructuración de objetos y arreglos

const avenger = {
    nombre: 'Steve',
    clave: 'Capitán América',
    poder: 'Artes marciales mixtas'
}

const extraer = ({nombre, poder}: any) => {
    console.log(nombre)
    console.log(poder)
}
// extraer(avenger)

const avengers: string[] = ['Thor', 'Ironman', 'Spiderman']
const [trueno, hierro, arana] = avengers

//console.log(trueno, hierro, arana)

const extraerArr = ([trueno, hierro, arana]: string[]) => {
    console.log(trueno, hierro, arana)
}

extraerArr(avengers)