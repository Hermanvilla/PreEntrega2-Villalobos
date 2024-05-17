import ItemCount from "./ItemCount"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ( {producto} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < producto.stock && setCantidad(cantidad + 1)
    }


  return (
    <div>
        <div className="my-10"> 
            <div className="aspect-ratio">
                <img className="w-200" src={producto.imagen} alt={producto.name} />
            </div>
            <h2 className="mt-4 font-bold">{producto.name}</h2>
            <h3 className=""> {producto.descripcion} </h3>
            <p className="precio">${producto.price}</p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(producto, cantidad) }}
                />
        </div>
    </div>
  )
}

export default ItemDetail;