import data from "../data/productos.json"

const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        },500)
        
    })
}

export default pedirProductos;


export const pedirItemPorCategoria = (categoria) => {
    return new Promise ((resolve, reject) => {
        
        const item = data.find((el) => el.categoria === categoria);

    if (item) {
            resolve (item)
        } else {
            reject ({
                error: "No se encontró el producto"
            })
        }
    
            }

    )
}



export const pedirItemPorId = (id) => {
    return new Promise ((resolve, reject) => {
        
        const producto = data.find((el) => el.id === id);

        if (producto) {
            resolve (producto)
        } else {
            reject ({
                error: "No se encontró el producto"
            })
        }
    
            }

    )
}