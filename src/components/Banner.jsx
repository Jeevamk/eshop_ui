import React from 'react';

const Banner = () => {
    return (
        <div className="container mx-auto px-4 lg:px-8 mt-14">
            <img 
                src="https://res.cloudinary.com/dsqsfves6/image/upload/v1716717191/bg-banner-removebg-preview_tlrw8k.png" 
                alt="Banner Image" 
                className="object-cover w-full h-80 lg:h-96 mt-8 lg:mt-12" 
            />
        </div>
    );
};

export default Banner;
