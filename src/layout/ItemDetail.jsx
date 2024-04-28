
const ItemDetail = ( {producto} ) => {
  return (
    <div>
        <div className="my-10"> 
            <div className="aspect-ratio">
                <img className="w-200" src={producto.imagen} alt={producto.name} />
            </div>
            <h2 className="mt-4 font-bold">{producto.name}</h2>
            <h3 className=""> {producto.descripcion} </h3>
        </div>
    </div>
  )
}

export default ItemDetail;