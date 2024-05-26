import React from 'react'
import Carousal from '../components/Carousal'
import CatogoryCard from '../components/CategoryCard'
import Services from '../components/Services'
import Banner from '../components/Banner'
import ProductList from '../components/ProductShow'


const Home = () => {
  return (
    <>
    <Carousal />
    <CatogoryCard />
    <Services />
    <Banner/>
    <ProductList />
    </>
  )
}

export default Home