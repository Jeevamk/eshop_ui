import React from 'react';
import Slider from "react-slick";

const CarousalData = [
  {
    "id": 1,
    "category": "Headphones",
    "name": "Sony WH-1000XM4",
    'title': "Wireless",
    "description": "Industry-leading noise canceling with Dual Noise Sensor technology",
    "price": 349.99,
    "image": "https://res.cloudinary.com/dsqsfves6/image/upload/v1716700786/sony-removebg_eb7ywp.png"
  },
  {
    "id": 2,
    "category": "Laptops",
    "name": "Apple MacBook Pro 13-inch",
    'title': "Branded",
    "description": "Powerful Apple M1 chip with stunning Retina display",
    "price": 1299.99,
    "image": "https://res.cloudinary.com/dsqsfves6/image/upload/v1716701396/apple-macbook-pro-13-inch-removebg-preview_2_qhyrck.png"
  },
  {
    "id": 3,
    "category": "Keyboards",
    "name": "Logitech MX Keys",
    'title': "Branded",
    "description": "Advanced wireless illuminated keyboard with easy-switching technology",
    "price": 99.99,
    "image": "https://res.cloudinary.com/dsqsfves6/image/upload/v1716702316/Logitech_MX__quxgy7.png"
  },
  {
    "id": 4,
    "category": "Mice",
    "name": "Razer DeathAdder V2",
    'title': "Branded",
    "description": "Ergonomic gaming mouse with Razer Optical Mouse Switches",
    "price": 69.99,
    "image": "https://res.cloudinary.com/dsqsfves6/image/upload/v1716707727/mice-removebg-preview_hglay2.png"
  },
  {
    "id": 5,
    "category": "Headphones",
    "name": "Bose QuietComfort 35 II",
    'title': "Wireless",
    "description": "World-class noise cancellation with built-in Google Assistant",
    "price": 299.99,
    "image": "https://res.cloudinary.com/dsqsfves6/image/upload/v1716700669/sony_cgkjmx.png"
  }
];

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='container mt-2'>
      <div className='overflow-hidden rounded-3xl h-auto sm:min-h-[550px] carousal-bg-color flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          <Slider {...settings}>
            {CarousalData.map((data) => (
              <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.name}</h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>{data.title}</h1>
                    <h1 className='text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.category}</h1>
                    <div>
                      <button className='bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className='order-1'>
                    <div>
                      <img src={data.image} className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-md relative z-40' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
