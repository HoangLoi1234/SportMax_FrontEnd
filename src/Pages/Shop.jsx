import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewLetters from '../Components/NewsLetter/NewLetters';
import AboutMe from '../Components/AboutMe/AboutMe';
import ListTypesProduct from '../Components/ListTypesProduct/ListTypesProduct';
import NewTechnology from '../Components/NewTechnology/NewTechnology';

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <ListTypesProduct/>
      <Offers/>
      <NewCollections/>
      <NewTechnology/>
      <Popular/>
      <AboutMe/>
      <NewLetters/>
    </div>
  )
}

export default Shop;
