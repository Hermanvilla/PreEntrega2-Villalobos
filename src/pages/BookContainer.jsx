import { useEffect, useState } from "react"
import Book from "./Book";


function BookContainer() {

    const [book, setBook] = useState({})

    useEffect(() => {

        fetch("../src/books.json")
            .then((res) => {
                return res.json()
            })
            .then((book) => {
                setBook(book)
            })

    }, []);

    return (
        <div>
            <Book Book={book} />
        </div>
    )

}

export default BookContainer