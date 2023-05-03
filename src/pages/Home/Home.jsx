import React from 'react';
import Chefs from './Chefs';
import PopularRecipes from './PopularRecipes';
import Feedback from './Feedback';

const Home = () => {
  return (
    <div>
      <Chefs></Chefs>
      <PopularRecipes></PopularRecipes>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;