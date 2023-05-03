import React from 'react';
import Chefs from './Chefs';
import PopularRecipes from './PopularRecipes';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Chefs></Chefs>
      <PopularRecipes></PopularRecipes>
    </div>
  );
};

export default Home;