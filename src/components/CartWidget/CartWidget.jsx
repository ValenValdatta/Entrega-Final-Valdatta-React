import cart from "./assets/Cart.svg"
import "./cartWidget.css"


const CartWidget = () => {
    return (
        <div className="cart__widget-container">
            <img src={cart} alt="cart-widget" />
            <p>0</p>
        </div>    
    )
}

export default CartWidget