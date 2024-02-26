import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Kuro Gaming" />
    </>
  )
}

export default App
