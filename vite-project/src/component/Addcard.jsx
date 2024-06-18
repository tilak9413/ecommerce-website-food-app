import React, { useContext ,useEffect } from 'react';
import { MyContext } from './context/Mycontext';

const Addcard = () => {
    const { cartItems, removeProductFromCart, getTotalCost, incrementProductQuantity, decrementProductQuantity } = useContext(MyContext);

    const getProductTotal = (price, quantity) => {
        const numericPrice = parseFloat(price.slice(1));
        return numericPrice * quantity;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="container mx-auto px-4 py-8 pt-28">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((product) => (
                        <div key={product.id} className="border-b mb-4 pb-4">
                            <img src={product.image} alt={product.description} className="w-20 h-20 object-cover" />
                            <div className="flex flex-col justify-between ml-4">
                                <div>
                                    <p className="font-semibold">{product.description}</p>
                                    <p>{product.price}</p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <button className="font-bold text-xl" onClick={() => decrementProductQuantity(product.id)}>-</button>
                                    <input type="number" value={product.quantity} readOnly className="w-8 px-2 border rounded text-center mx-2" />
                                    <button className="font-bold text-xl" onClick={() => incrementProductQuantity(product.id)}>+</button>
                                    <span className="ml-auto">${getProductTotal(product.price, product.quantity).toFixed(2)}</span>
                                    <button onClick={() => removeProductFromCart(product.id)} className="ml-4 bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-lg font-bold mt-6">
                        Total Cost: ${getTotalCost().toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Addcard;
