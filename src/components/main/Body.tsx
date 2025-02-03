import React from 'react'

export default function Body() {
    const [cart, setCart] = React.useState([]);
      const products = [
        { id: 1, name: "Album 1", price: 12.99, img: "./img/Album 1.png" },
        { id: 2, name: "Album 2", price: 14.99, img: "./img/Album 2.png" },
        { id: 3, name: "Album 3", price: 9.99, img: "./img/Album 3.png" },
        { id: 4, name: "Album 4", price: 19.99, img: "./img/Album 4.png" },
        { id: 5, name: "T-Shirt", price: 19.99, img: "./img/Shirt.png" },
        { id: 6, name: "Coffee Cup", price: 6.99, img: "./img/Cofee.png" }
      ];
    
      const addToCart = (product) => {
        setCart([...cart, product]);
      };
  return (
    <section className="container mx-auto p-6">
    <h2 className="text-3xl font-bold text-center mb-6">MERCH</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow rounded-lg text-center">
          <img src={product.img} alt={product.name} className="h-48 w-full object-cover" />
          <h3 className="text-lg font-semibold my-2">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <button 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            ADD TO CART
          </button>
        </div>
      ))}
    </div>
  </section>
  )
}
