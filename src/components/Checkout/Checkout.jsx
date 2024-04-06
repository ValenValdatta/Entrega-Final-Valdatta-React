import OrderForm from "../OrderForm/OrderForm"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { getDocs, collection, query, where, documentId, QuerySnapshot, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useState } from "react"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async (formData) => {

        try {
            setLoading(true)
            const objOrder = {
                buyer: formData,
                items: cart,
                total: total
    
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids ))
    
            // getDocs(productsCollection)
            // .then(QuerySnapshot => console.log(QuerySnapshot.docs))
    
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({id: doc.id, ...data}) 
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, "orders")
                const {id} = await addDoc(orderCollection, objOrder)

                clearCart()
                setOrderId(id)
            }else {
                console.error("Hay productos sin stock!");
            }
        } catch (error) {
            console.error("Hubo un error generando la orden", error);
        }finally {
            setLoading(false)
        }
    }   

    if(loading) {
        return <h1>Su orden esta siendo generada..</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <OrderForm onAdd={createOrder}/>
        </div>
    )
}

export default Checkout