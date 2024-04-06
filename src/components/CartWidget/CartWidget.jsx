import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import cart from "./assets/Cart.svg"
import "./cartWidget.css"
import { Link } from "react-router-dom"


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={"/cart"}  className="cart__widget-container">
            <img src={cart} alt="cart-widget" />
            <p>{totalQuantity}</p>
        </Link>    
    )
}

export default CartWidget