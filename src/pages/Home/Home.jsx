import React from 'react';
import Chefs from './Chefs';
import PopularRecipes from './PopularRecipes';
import Header from './Header';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Chefs></Chefs>
      <PopularRecipes></PopularRecipes>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;