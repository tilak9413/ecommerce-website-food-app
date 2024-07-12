import { useContext ,useEffect  } from "react";
import { MyContext } from "./context/Mycontext";

const Shop = () => {

    const { products } = useContext(MyContext);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className=" py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold  text-center mb-8 text-red-900 pt-20"> Latest Product items</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg  p-8">
                            <div className="relative overflow-hidden">
                                <img className="object-cover w-full h-64 rounded-sm " src={product.image} alt="Product" />
                               
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mt-4">{product.name}</h3>
                            <p className="text-gray-500 text-sm mt-2">{product.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-red-900 font-bold text-lg">{product.price}</span>
                                <button className="bg-red-800 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center  mt-5' >
                    <button className='  bg-red-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800' > View more </button>
                </div>
            </div>

        </div>
    );
};

export default Shop;

