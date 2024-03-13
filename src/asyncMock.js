const products = [
   {
      id: "1",
      name: "Procesador AMD Ryzen 7 5700G",
      price: 200000,
      category: "procesador",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_622790-MLU72699561931_112023-F.webp",
      stock: 25,
      description: "Descripcion de Procesador",
   },
   {
      id: "2",
      name: "Nvidia Zotac Gaming GeForce RTX 30 Series RTX 3090 ",
      price: 400000,
      category: "placa",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_659938-MLA51558829194_092022-F.webp",
      stock: 16,
      description: "Descripcion de Placa de video",
   },
   {
      id: "3",
      name: "Motherboard Asus Tuf Gaming B550m-plus",
      price: 150000,
      category: "mother",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_657722-MLU70065298721_062023-F.webp",
      stock: 0,
      description: "Descripcion de Mother",
   },
];

export const getProducts = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products);
      }, 100);
   });
};

export const getProductsByCategory = (categoryId) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products.filter((prod) => prod.category === categoryId));
      }, 100);
   });
};

export const getProductById = (itemId) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products.find((prod) => prod.id === itemId));
      }, 100);
   });
};
