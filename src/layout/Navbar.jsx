import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex items-center justify-center gap-4">
            <div className="items-center hidden md:flex md:gap-4 ">


                <Link className="px-4 -mb-1 border-b-2 dark:border-" to="/nosotros">Nosotros</Link>

                <Link className="px-4 -mb-1 border-b-2 dark:border-" to="/manga">Manga</Link>
                
                <Link className="px-4 -mb-1 border-b-2 dark:border-" to="/cultura">Cultura</Link>

                <Link className="px-4 -mb-1 border-b-2 dark:border-" to="/contacto">Contacto</Link>

                <CartWidget/>
            </div>
        </nav>
    )
}
export default Navbar


/*
<Link to="/category/Human">humanos</Link>
<Link to="/category/Alien">aliens</Link>
*/