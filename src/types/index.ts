// TYPES

export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

// GENERO UN NUEVO TYPE PARA RECOGER LA PROPIEDAD ID DE GUITAR
export type GuitarID = Guitar['id']

// INTERFACE

// export interface Guitar {
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number
// }

// TYPES HERENCIA

export type CartItem = Guitar & {
    quantity: number
}

// INTERFACE HERENCIA 

// export interface CartItem extends Guitar {
//     quantity: number
// }

// UTILITY TYPES

// PICK: Se coloca el type sobre el que queremos referirnos, y después los campos que te interesan.

// Para generar un nuevo Type y seleccionar unicamente los campos que nos interesan del Type que tomamos como referencia.
// export type CartItem = Pick <Guitar, 'id' | 'name' | 'price' >

// El mismo caso, pero en este supuesto si queremos incluir nuevos atributos al nuevo Type a parte de los que estamos tomando de Guitar. 
// export type CartItem = Pick <Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

// OMIT: La sintaxis es igual que PICK, pero en este caso es para indicar los que queremos Omitir
// 
// export type CartItem = Omit <Guitar, 'id' | 'name' | 'price' >

