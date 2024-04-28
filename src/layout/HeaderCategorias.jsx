import NavbarCategorias from "./NavbarCategorias"
import { Routes, Route } from "react-router-dom"

function HeaderCategorias() {
    return (
        <header className="flex justify-center p-4 text-black shadow-md bg-white rounded-xl ">

            <Routes>
                <Route path="/manga" element={
                    <input type="text" placeholder="Buscar por nombre:" className="p-2 rounded-md"/>
                } />
            </Routes>

            <NavbarCategorias/>

        </header>
    )
}

export default HeaderCategorias