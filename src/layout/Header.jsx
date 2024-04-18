import Logo from "./logo"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom"

function Header() {
    return (
        <header className="flex justify-between p-4 text-black shadow-md bg-white">

            <Logo/>

            <Routes>
                <Route path="/recursos" element={
                    <input type="text" placeholder="Consulta tu recurso" className="p-2 rounded-md"/>
                } />
            </Routes>

            <Navbar />

        </header>
    )
}

export default Header