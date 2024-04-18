import { BrowserRouter } from "react-router-dom"
import Footer from "./layout/Footer.jsx"
import Header from "./layout/Header.jsx"
import Main from "./layout/Main.jsx"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
