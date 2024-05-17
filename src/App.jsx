import { BrowserRouter } from "react-router-dom"
import Footer from "./layout/Footer.jsx"
import Header from "./layout/Header.jsx"
import Main from "./layout/Main.jsx"
import { CartContext } from "./context/CartContext.jsx"
import { useState } from "react"


function App() {

  const [ carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto, cantidad) => {
    const productoAgregado = { ...producto, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === productoAgregado.id);

    if (estaEnElCarrito) {
        estaEnElCarrito.cantidad += cantidad;
    } else {
        nuevoCarrito.push(productoAgregado);
    }
    setCarrito(nuevoCarrito);
}

  return (
    <CartContext.Provider value={ {carrito}}>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
