import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductDisplay from './components/ProductDisplay'
import CartPage from './components/CartPage'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductDisplay/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App