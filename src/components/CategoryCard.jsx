
import { Link } from 'react-router-dom';
import React from 'react';

const CategoryCard = ({ category, description, image }) => {
  return (
    <div className='py-10 pl-5 pr-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] mt-11'>
      <div>
        <div className='mb-4'>
          <p className='mb-[2px] font-gray-400'>{description}</p>
          <p className='text-2xl font-semibold mb-[2px]'>With</p>
          <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>{category}</p>
        </div>
      </div>
      <img src={image} alt={category} className='w-[320px] absolute bottom-0' />
    </div>
  );
};

const CategoryCardList = () => {
  const categoryCards = [
    { 
      category: 'Headphones', 
      image: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716700669/sony_cgkjmx.png', 
      description: 'Enjoy'
    },
    { 
      category: 'Laptops', 
      image: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716701396/apple-macbook-pro-13-inch-removebg-preview_2_qhyrck.png', 
      description: 'Enjoy'
    },
    { 
      category: 'Mice', 
      image: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716707727/mice-removebg-preview_hglay2.png', 
      description: 'Enjoy'
    },
    { 
      category: 'Smartphones', 
      image: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716713920/smartphone-removebg-preview_unjrdo.png', 
      description: 'Enjoy'
    }
  ];

  return (
    <div className='py-8 mx-auto max-w-7xl'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {categoryCards.map((card, index) => (
            <CategoryCard
              key={index}
              category={card.category}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCardList;
