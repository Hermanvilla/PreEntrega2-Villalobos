import ItemListContainer from "../layout/ItemListContainer"

function Books() {

    return (
        <div>
            <h2>Recursos Audiovisuales disponibles</h2>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
                <ItemListContainer/>
            </section> 
        </div>
    )
}

export default Books