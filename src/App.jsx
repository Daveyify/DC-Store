import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CartPage from './pages/CartPage'


function App() {
  const [cart, setCart] = useState([])

  function handleAddToCart(product) {
    setCart([...cart, product])
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/carrito" element={<CartPage cart={cart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App