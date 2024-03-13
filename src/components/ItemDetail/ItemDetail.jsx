import ItemCount from "../ItemCount/ItemCount"
import "./itemDetail.css"



const ItemDetail =  ({name, category, price, img, description, stock}) => {
    return (
        <article className="ecommerce__item-detail">
            <img src={img} />
            <h3>{name}</h3>
            <h4>categoria: {category}</h4>
            <h4>${price}</h4>
            <h4>Descripcion: {description}</h4>
            <ItemCount stock={stock} />
        </article>
    )
}

export default ItemDetail