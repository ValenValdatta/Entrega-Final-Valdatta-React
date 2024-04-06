import { useState } from "react";

const OrderForm = ({onAdd}) => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      telefono: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Formulario enviado:", formData);
   };

   return (
      <div>
         <h2>Checkout</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Nombre:</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
               />
            </div>
            <div>
               <label htmlFor="email">Correo electrónico:</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>
            <div>
               <label htmlFor="telefono">Telefono:</label>
               <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
               />
            </div>
            <button type="submit" onClick={() => onAdd(formData) }>Crear orden de compra</button>
         </form>
      </div>
   );
};


export default OrderForm;