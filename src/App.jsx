import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import NavBar from './components/NavBar/NavBar'
import CartView from './components/Cartview/CartView.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css"
import { CartProvider } from './Context/CartContext.jsx';
import Checkout from './components/Checkout/Checkout.jsx';


const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Kuro Gaming" />} /> 
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos de la Categoria:" />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
