import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css"

const Menu = () => (
  <>
  <Link to="/category/procesador">Procesadores</Link>
  <Link to="/category/placa">Placas de Video</Link>
  <Link to="/category/mother">Motherboards</Link>
  </>
)


const NavBar = () => {
  return (
    <div className="ecommerce__navbar">
      <div className="ecommerce__navbar-logo">
        <Link to= "/" style={{textDecoration: "none"}}><h1>Kuro Gaming</h1></Link >
      </div>
      <div className="ecommerce__navbar-links">
        <Menu />
      </div>
      <div className="ecommerce__navbar-cart">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;