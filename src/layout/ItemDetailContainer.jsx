import { useEffect, useState } from 'react';
import { pedirItemPorId } from './pedirProductos';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const [producto , setProducto] = useState ()
    const id = useParams().id;
    console.log(id);
    
    useEffect(() => {
        pedirItemPorId(id)
            .then((res) => {
                setProducto(res)
            })
    }, [])


  return (
    <div>
        <h1>Descripcion del Producto</h1>
        {producto && <ItemDetail producto={producto} /> }
    </div>
  )
}

export default ItemDetailContainer;