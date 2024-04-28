import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import pedirProductos from "./pedirProductos"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria;
    console.log(categoria);

    useEffect (() => {
        pedirProductos()
            .then((res) => {
                if (categoria){
                    setProductos(res.filter ((producto) => producto.categoria === categoria));
                } else {
                    setProductos(res)
                }
                
            })
    }, [categoria])

    return (
        <div>
        <ItemList productos={productos} />
        </div>
            )

}


export default ItemListContainer