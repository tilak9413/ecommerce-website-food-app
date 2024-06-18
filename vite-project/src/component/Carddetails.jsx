import React, { useContext , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from './context/Mycontext';

const Carddetails = () => {
    const { photoId } = useParams();
    const { products } = useContext(MyContext);
    const product = products.find(p => p.id === parseInt(photoId));

    if (!product) {
        return <div>Product not found</div>;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div style={{paddingTop:"180px"}} className="bg-white shadow-md  py-16 ">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    <img className="object-cover w-full h-64 md:w-1/2" src={product.image} alt={product.name} />
                </div>
                <h2 className="text-3xl font-bold text-center mt-8 text-gray-900">{product.name}</h2>
                <p className="text-center mt-4 text-gray-500">{product.description}</p>
                <div className="text-center mt-4">
                    <span className="text-red-900 font-bold text-lg">{product.price}</span>
                </div>
                <div className="text-center mt-4">
                    <button
                        onClick={() => addProductToCart(product)}
                        className="bg-red-800 text-white py-2 px-4 rounded font-bold hover:bg-gray-800"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carddetails;
