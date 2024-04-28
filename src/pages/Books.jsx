import ItemListContainer from "../layout/ItemListContainer"
import HeaderCategorias from  "../layout/HeaderCategorias"

function Books() {

    return (
        <div>
        <HeaderCategorias/>
        <h2>Productos disponibles</h2>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
            <ItemListContainer/>
        </section> 
    </div>
    )
}

export default Books