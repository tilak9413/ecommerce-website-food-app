import React, { useContext ,useEffect } from 'react';
import { MyContext } from './context/Mycontext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
const Product = () => {
    const { products, addProductToCart } = useContext(MyContext);

    const displayedProducts = products.slice(0, 3);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="bg-white py-16"  >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-red-900">Latest Product Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayedProducts.map((product) => (
                        <div key={product.id} className="bg-white p-8 " >
                            <Link to={`/Carddetails/${product.id}`}>
                                <div className="relative overflow-hidden">
                                    <img className="object-cover w-full h-64" src={product.image} alt={product.name} />
                                </div>
                            </Link>
                            <h3 className="text-xl font-bold text-gray-900 mt-4">{product.name}</h3>
                            <p className="text-gray-500 text-sm mt-2">{product.description}</p>
                            <div className="flex items-center justify-between gap-4 mt-4">
                                <span className="text-red-900 font-bold text-lg">{product.price}</span>
                                <button
                                    onClick={() => addProductToCart(product)}
                                    className="bg-red-800 text-white mt-2 py-2 px-4 rounded font-bold hover:bg-gray-800"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <button className="bg-red-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                        <Link to="/Shop" onClick={() => window.scrollTo(0, 0)}>View more</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
