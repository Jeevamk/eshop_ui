import React, { useState } from 'react';
import { FaEye, FaFilter, FaSort,FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, name, price, imageUrl } = product;

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-xl mx-auto mt-6 product-card">
            <img src={imageUrl} alt={name} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
            
            <div className="px-4 py-2 bg-white bg-opacity-75 text-black flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-sm">{price}</p>
                </div>
                <Link to={'/cart'} className="flex items-center">
                    <FaShoppingCart className="mr-2" />
                </Link>
            </div>
        </div>
    );
};

const ProductList = () => {
    const [filterOpen, setFilterOpen] = useState(false);

    const products = [
        { id: 1, name: 'iphone-14', price: '$20.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716719768/png-transparent-iphone-14_saecun.png' },
        { id: 2, name: 'Bose QuietComfort 35 II', price: '$30.49', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716700669/sony_cgkjmx.png' },
        { id: 3, name: 'Razer DeathAdder V2', price: '$25.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716720639/mouse-removebg-preview_lwmzyc.png' },
        { id: 4, name: 'boAt stone', price: '$15.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716720775/Bluetooth-Speaker-PNG-Image-removebg-preview_zkns2d.png' },
        { id: 5, name: 'Apple MacBook Pro 13-inch', price: '$40.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716701396/apple-macbook-pro-13-inch-removebg-preview_2_qhyrck.png' },
        { id: 6, name: 'SoundDrum 1', price: '$43.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716721259/Portronics-removebg-preview_zt7ayz.png' },
        { id: 1, name: 'iphone-14', price: '$20.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716719768/png-transparent-iphone-14_saecun.png' },
        { id: 8, name: 'OnePlus Nord Wired Earphones', price: '$40.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716721786/1-m00-removebg-preview_d4xks8.png' },
    ];  

    return (
        <div className="flex">
            <div className="w-64 bg-gray-200 p-4">
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button onClick={() => setFilterOpen(!filterOpen)}>
                        <FaFilter />
                    </button>
                </div>
                {filterOpen && (
                    <div className="flex flex-col space-y-2">
                    </div>
                )}
                <div className="flex justify-between mt-8">
                    <h2 className="text-lg font-semibold">Sort</h2>
                    <button>
                        <FaSort />
                    </button>
                </div>
            </div>
            <div className="container mx-auto px-4 lg:px-8 mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map(product => (
                        <div key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
