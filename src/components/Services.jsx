import React from 'react';
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from 'react-icons/fa';

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-black-500' />,
        title: 'Free Shipping',
        description: 'Free Shipping on All Orders'
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-black-500' />,
        title: 'Safe Money',
        description: '30 Days Money Back Guarantee'
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-black-500' />,
        title: 'Secure Payment',
        description: 'All payments are secure'
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-black-500' />,
        title: 'Top-notch Support',
        description: 'Contact us at sayhello@eshop.com'
    }
];

const Services = () => {
    return (
        <div className="container ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 m-14">
                {ServiceData.map((data) => (
                    <div key={data.id} className="flex flex-col items-center">
                        <div className="mb-2">{data.icon}</div>
                        <h1 className="text-lg md:text-xl font-semibold">{data.title}</h1>
                        <p className="text-sm md:text-base">{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
