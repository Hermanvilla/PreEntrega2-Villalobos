import { Link } from "react-router-dom"

function NavbarCategorias() {
    return (
        <nav className="flex items-center justify-center gap-4">
            <div className="items-center hidden md:flex md:gap-4 ">


                <Link className="px-4 -mb-1" to="/adventure">Aventura</Link>

                <Link className="px-4 -mb-1" to="/action">Acción</Link>
                
                <Link className="px-4 -mb-1" to="/thriller">Thriller</Link>

                <Link className="px-4 -mb-1" to="/horror">Terror</Link>

                <Link className="px-4 -mb-1" to="/manga">Todos</Link>

            </div>
            
        </nav>
    )
}
export default NavbarCategorias


/*
<Link to="/category/Human">humanos</Link>
<Link to="/category/Alien">aliens</Link>
*/