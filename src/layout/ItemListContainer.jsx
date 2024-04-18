import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"

function ItemListContainer() {

    const [books, setBooks] = useState([])


    useEffect(() => {


        fetch("/books.json")
            pedido.then((res) => {
                return res.json()
            })
            .then((res) => {
                setBooks(res.results)
            })
            .catch((err) => {
                console.log(err)
            })
            
    }, [])

    return (
        <>
            {books.map((book) => {
                return <ItemCard key={book.id} book={book} />
            })}
        </>
    )
}
export default ItemListContainer