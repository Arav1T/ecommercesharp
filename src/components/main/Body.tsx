
import React from 'react';
import { useCartContext } from '../../store/ContextStore';

export default function Body() {
    const { addCartItem } = useCartContext()
    const products = [
        { id: 1, title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
        { id: 2, title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
        { id: 3, title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
        { id: 4, title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' }
    ];
    const handleOnSubmit=(product)=>{
        addCartItem(product)
    }

    return (
        <section className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">MERCH</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 ">
                {products.map((product) => (
                    <div key={product.id} className=" shadow rounded-lg text-center relative overflow-hidden ">
                        <h3 className="text-lg font-semibold my-2">{product.title}</h3>
                       
                        <div className="relative flex justify-center items-center h-48 overflow-hidden">
                            <img 
                                src={product.imageUrl} 
                                alt={product.title} 
                                className="h-40 object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-between mt-4">
                            <p className="text-gray-600">${product.price}</p>
                            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700" onClick={()=>addCartItem(product)}>ADD TO CART</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
