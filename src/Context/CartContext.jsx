import { createContext, useState } from 'react';


export const CartContext = createContext(1)

export const CartProvider = ({children}) => {
   const [cart, setCart] = useState([]);
   console.log(cart);

   const addItem = (productToAdd) => {
      if (!isInCart(productToAdd.id)) {
         setCart((prev) => [...prev, productToAdd]);
      } else {
         console.error("El producto ya se encuentra en el carrito");
      }
   };

   const isInCart = (id) => {
      return cart.some((prod) => prod.id === id);
   };

   const clearCart = () => {
      setCart([])
   }

   const removeItem = (id) => {
      const uptdateCart = cart.filter(prod => prod.id !== id)
      setCart(uptdateCart)
   }

   const getTotalQuantity = () => {
      let accu = 0;

      cart.forEach((prod) => {
         accu += prod.quantity;
      });

      return accu;
   };

   const totalQuantity = getTotalQuantity();

   const getTotal = () => {
      let accu = 0;

      cart.forEach((prod) => {
         accu += prod.quantity * prod.price;
      });

      return accu;
   };

   const total = getTotal();

   return (
      <CartContext.Provider value={{ cart, addItem, totalQuantity, total, clearCart, removeItem }}>
         {children}
      </CartContext.Provider>
   );
};
