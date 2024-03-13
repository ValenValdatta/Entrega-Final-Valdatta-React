import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./itemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(result => {
                setProduct(result)
            })
    }, [itemId])
    
    return(
        <div className="ecommerce__item-detail-container">
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}


export default ItemDetailContainer