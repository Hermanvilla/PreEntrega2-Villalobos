import { Link } from "react-router-dom"

function NavbarF() {
    return (
        <nav className="flex items-center justify-center gap-4">
            <div className="items-center hidden md:flex md:gap-4 ">


                <Link className="px-4 -mb-1" to="/nosotros">Nosotros</Link>

                <Link className="px-4 -mb-1" to="/recursos">Recursos</Link>
                
                <Link className="px-4 -mb-1" to="/cultura">Cultura</Link>

                <Link className="px-4 -mb-1" to="/contacto">Contacto</Link>

            </div>
            
        </nav>
    )
}
export default NavbarF


/*
<Link to="/category/Human">humanos</Link>
<Link to="/category/Alien">aliens</Link>
*/