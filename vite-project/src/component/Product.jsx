import React, { useContext ,useEffect } from 'react';
import { MyContext } from './context/Mycontext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
const Product = () => {
    const { products, addProductToCart } = useContext(MyContext);

    const displayedProducts = products.slice(0, 8);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
             <svg   className="float1 " style={{position:"absolute" , left:"1216px"}} width="95" height="71" viewBox="0 0 95 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.8823 28.7076C59.1658 33.7377 52.6143 42.344 48.1404 36.5293C45.7436 33.4142 43.407 28.5241 40.5636 36.4781L38.8792 42.2317C37.6944 45.5457 35.7656 43.1096 35.0127 38.8834C33.6953 31.4873 28.3277 29.0475 23.0991 32.8424C18.7752 35.8421 9.51666 43.3423 7.07305 49.3448" stroke="#8C80F6" stroke-width="2" stroke-linecap="round"></path>
        <rect width="13.9124" height="13.9069" rx="4" transform="matrix(0.429535 -0.905358 0.898763 0.433658 68.9102 27.3242)" fill="#AC9BF6"></rect>
        </svg>
        <div className="bg-white    "  >
             
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-red-900">Latest Product Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 ">
                    {displayedProducts.map((product) => (
                        <div key={product.id} className="bg-white p-8  " >
                            <Link to={`/Carddetails/${product.id}`}>
                                <div className="relative overflow-hidden">
                                    <img className="object-cover w-full h-64 rounded-xl" src={product.image} alt={product.name} />
                                </div>
                            </Link>
                            <h3 className="text-xl font-bold text-gray-900 mt-4 ">{product.name}</h3>
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
        
         

          </div>
    );
};

export default Product;
