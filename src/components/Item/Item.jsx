import "./item.css"
import { Link } from "react-router-dom"


const Item = ({id, name, img, price, category}) => {
    return (
        <article className="ecommerce__item">
            <h3>{name}</h3>
            <Link to= {`/item/${id}`}> <img src={img} /> </Link> 
            <h4>${price}</h4>
            <h4>categoria: {category}</h4>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </article>
    )
}

export default Item