import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./itemListContainer.css"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    
    useEffect (() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
    }, [categoryId])

    return (
        <div className="itemList-container">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer