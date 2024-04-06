import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
import { QuerySnapshot, collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const NavBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    
    getDocs(categoriesCollection).then((QuerySnapshot) => {
      const categoriesAdapted = QuerySnapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setCategories(categoriesAdapted);
    });
  }, []);
  
  const Menu = () => (
     <>
        {categories.map((cat) => {
           return <Link key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</Link>;
        })}
     
     </>
  );
  return (
      <div className="ecommerce__navbar">
         <div className="ecommerce__navbar-logo">
            <Link to="/" style={{ textDecoration: "none" }}>
               <h1>Kuro Gaming</h1>
            </Link>
         </div>
         <div className="ecommerce__navbar-links">
            <Menu />
         </div>
         <div className="ecommerce__navbar-cart">
            <CartWidget />
         </div>
      </div>
   );
};

export default NavBar;
