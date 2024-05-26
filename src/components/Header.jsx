import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assests/logo/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
             <Link to={'/'}> <img className="h-16 w-auto" src={logo} alt="Logo" /></Link>
            </div>
            <div className="hidden md:block items-center">
              <div className="ml-10 flex space-x-4">
                <Link to="/" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/shop" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Shop</Link>
                <Link to="/about" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black w-full"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             <button type="submit" className="border-2 border-black text-black font-semibold px-2 py-2 rounded-md ml-2 hover:bg-blue-700 hover:text-white hover:border-blue-700">Search</button>
              
              </div>
            </form>


            <div className="ml-4 flex items-center space-x-4">
              <Link to="/login" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-xl font-medium"><FiUser /></Link>
              <div className="relative">
                <Link to="/cart" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-xl font-medium">
                  <FiShoppingCart />
                  {cartItemCount > 0 && (
                    <span className="absolute top-3 right-0 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cartItemCount}</span>
                  )}
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-800 relative">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cartItemCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-1 top-1 mt-2 mr-2">
                <FiSearch className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </form>
          <Link to="/" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/shop" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Shop</Link>
          <Link to="/about" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/contact" className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          <div className="ml-4 flex items-center space-x-4 mt-4">
            <Link to="/login" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-xl font-medium"><FiUser /></Link>
            <Link to="/cart" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-xl font-medium"><FiShoppingCart /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
