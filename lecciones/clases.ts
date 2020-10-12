// Definición de clases
class Avenger {
    // nombre: String
    // equipo: String
    // nombreReal: String

    // puedePelear: Boolean
    // peleasGanadas: Number

    // constructor(nombre: String, equipo: String, nombreReal: String, puedePelear: Boolean, peleasGanadas: Number) {
    //     this.nombre = nombre
    //     this.equipo = equipo
    //     this.nombreReal = nombreReal
    //     this.puedePelear = puedePelear
    //     this.peleasGanadas = peleasGanadas
    // }

    constructor(public nombre: string,
                public equipo: string,
                public nombreReal?: string,
                public puedePelear: boolean = true,
                public peleasGanadas: number = 0) {

    }
}

const antman = new Avenger('Antman', 'Capi')
console.log(antman)