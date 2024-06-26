import Logo from "./logo"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom"
import Books from "../pages/Books"

function Header() {
    return (
        <header className="flex justify-between p-4 text-black shadow-md bg-white">

            <Logo/>

            <Routes>
                <Route path="/manga" element={
                    <input type="text" placeholder="Buscar por nombre:" className="p-2 rounded-md"/>
                } />

            </Routes>

            <Navbar />

        </header>
    )
}

export default Header