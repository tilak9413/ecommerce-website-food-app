import { createContext, useState } from "react";

// Creating context
export const MyContext = createContext({
    products: [],
    cartItems: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    getTotalCost: () => {},
    incrementProductQuantity: () => {},
    decrementProductQuantity: () => {},
});

export const MyProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        {
            id: 1,
            name: "Product Name 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/2d/82/8f/2d828f21fd6c829f8ee9698e3b7f205b.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 2,
            name: "Product Name 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/1e/a7/fc/1ea7fca510708ed25f97b2ca63809d32.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 3,
            name: "Product Name 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/564x/d4/9b/26/d49b260e08d671f171ad05062025e0f6.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 4,
            name: "Product Name 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/17/4e/cb/174ecbfd4c5791acbe0f4104047d1149.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 5,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/ec/95/de/ec95de407a8a09c16f78761571b0412c.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 6,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/7d/13/ef/7d13efb64513e2de54ba807dc1db1cf1.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 7,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/52/2c/74/522c74e4b62a5562a28232546f003426.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 7,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/00/6c/97/006c97a0f9210e2eddf7216f352d0ee1.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 8,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/6f/67/17/6f6717b434fcc97cb5fc8747b23b5001.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 9,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/36/98/6b/36986b4de2c1e2167993356a470760e9.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 10,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/9e/c9/e0/9ec9e0c412cda6a785846deda91b2c79.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 11,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/50/3f/13/503f13f2ef189e852844508200a328df.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        },
        {
            id: 12,
            name: "Product Name 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            price: "$29.99",
            image: "https://i.pinimg.com/236x/de/bc/0b/debc0b346c6f498c1c276bf4f27e3793.jpg",
            benefits: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt."]
        }
    ];
    const slides = [
        {
          id: 0,
          src: "https://i.pinimg.com/564x/90/76/ff/9076ffe25767c5003290da18ff86b26b.jpg",
          alt: "First Slide",
          text: "First Slide",
        },
        {
          id: 1,
          src: "https://i.pinimg.com/564x/1c/c3/28/1cc3283fac169667c198c84291141109.jpg",
          alt: "Second Slide",
        },
        {
          id: 2,
          src: "https://i.pinimg.com/236x/b6/9d/06/b69d06909dc145d8d6895276e02b9e61.jpg",
          alt: "Third Slide",
        },
      ];

    const addProductToCart = (product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeProductFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const incrementProductQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementProductQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const getTotalCost = () => {
        return cartItems.reduce((total, product) => total + parseFloat(product.price.slice(1)) * product.quantity, 0);
    };

    return (
        <MyContext.Provider
            value={{
                products,
                cartItems,
                addProductToCart,
                removeProductFromCart,
                getTotalCost,
                incrementProductQuantity,
                decrementProductQuantity,
             slides,
 

            }}
        >
            {children}
        </MyContext.Provider>
    );
};
