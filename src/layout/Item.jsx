import React from "react"
import { Link } from "react-router-dom"

const Item = ( {producto} ) => {
    return (
        <div className="my-10 justify-center"> 
            <div className="aspect-ratio">
                <img className="w-full transition-all duration-500 rounded-md group-hover:scale-150" src={producto.imagen} alt={producto.name} />
            </div>
            <h2 className="font-bold">{producto.name}</h2>
            <p className="text-sm mb-4">{producto.categoria}</p>
            <Link className="bg-white hover:bg-red-500 text-black font-bold py-2 px-4 rounded" to={`/manga/${producto.id}`} >Ver más</Link>
        </div>
    )
}

export default Item
