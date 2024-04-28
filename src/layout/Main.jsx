import { Routes, Route } from 'react-router-dom'
import Nosotros from "../pages/Nosotros"
import Cultura from '../pages/Cultura'
import Books from '../pages/Books'
import Contacto from '../pages/Contacto'
import ItemDetailContainer from './ItemDetailContainer'

function Main() {
    return (
        <main className='p-4 text-white grow mi-main bg-red-600'>
            <Routes>

                <Route path='/nosotros' element={<Nosotros/>} />

                <Route path='/manga' element={<Books/>} />

                <Route path='/:categoria' element={<Books/>} />

                <Route path='/manga/:id' element={<ItemDetailContainer/>} />
                
                <Route path='/cultura' element={<Cultura/>} />

                <Route path='/contacto' element={<Contacto/>} />

                <Route path="*" element={<p>No encontrado</p>} />

            </Routes>
        </main>
    )
}

export default Main