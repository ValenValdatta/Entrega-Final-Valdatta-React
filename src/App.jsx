import "./app.css"
import ItemCount from "./components/ItemCount/ItemCount.jsx";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Kuro Gaming" />} /> 
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos de la Categoria:" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
