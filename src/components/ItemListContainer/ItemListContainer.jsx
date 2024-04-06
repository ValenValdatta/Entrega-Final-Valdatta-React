import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "./itemListContainer.css"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    
    useEffect (() => {

        const productsCollection = categoryId 
            ? query(collection(db, "products"), where("category", "==", categoryId) )
            : collection(db, "products")
            

        getDocs(productsCollection)
            .then(QuerySnapshot => {
                const productsAdapted = QuerySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(result => {
        //         setProducts(result)
        //     })
    }, [categoryId])

    return (
        <div className="itemList-container">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer