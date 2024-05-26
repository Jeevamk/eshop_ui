import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const cartItems = [
        { id: 1, name: 'iPhone 14', price: '$999', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716719768/png-transparent-iphone-14_saecun.png' },
        { id: 2, name: 'Bose QuietComfort 35 II', price: '$899', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716700669/sony_cgkjmx.png' },
        { id: 3, name: 'Razer DeathAdder V2', price: '$799', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716720639/mouse-removebg-preview_lwmzyc.png' },
    ];

    return (
        <div className="container mx-auto px-4 lg:px-8 mt-14">
            <h2 className="text-3xl font-bold mb-4 uppercase text-center">Shopping Cart</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id} className="border-b border-gray-200 text-center" >
                                <td className="px-4 py-2">
                                    <div className="flex items-center">
                                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-2" />
                                        <span>{item.name}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-2">{item.price}</td>
                                <td className="px-4 py-2">
                                    <button className="text-blue-500">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 flex justify-between">
                <p className="text-lg font-semibold">Total:</p>
                <p className="text-lg">$2697</p>
            </div>
        </div>
    );
};

export default Cart;
