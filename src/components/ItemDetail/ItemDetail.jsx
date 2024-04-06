import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./itemDetail.css"
import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const ItemDetail =  ({id, name, category, price, img, description, stock}) => {
    
    const value = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const notifySuccess = () => {
        toast.success("Producto agregado al carrito!", {
            position: "top-right"})
    }
    
    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
             id, name, price, quantity
        }
        setQuantity(quantity)

        addItem(objProductToAdd)

        notifySuccess()
    }
    
    
    return (
        <article className="ecommerce__item-detail">
            <img src={img} />
            <h3>{name}</h3>
            <h4>categoria: {category}</h4>
            <h4>${price}</h4>
            <h4>Descripcion: {description}</h4>
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <div className="ecommerce__item-detail-links">
                            <Link to="/cart"><h4>Finalizar compra</h4> </Link>
                            <Link to="/"> <h4>Seguir comprando</h4> </Link>
                        </div>
                    )
                }
            </footer>
            <ToastContainer />
        </article>
    )
}

export default ItemDetail