import React, { useState } from 'react';
import { useEffect } from 'react';
import RecipeCard from './RecipeCard';

const PopularRecipes = () => {
  const [popularRecipe, setPopularRecipe] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/popular')
      .then((result) => result.json())
      .then((data) => setPopularRecipe(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='my-container'>
      <h1
        className="text-xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-normal text-center">
        Most Popular Recipes
      </h1>
      <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>Check out our most popular recipes - tried and tested favorites that are sure to impress! From mouthwatering mains to delectable desserts,
       these recipes are loved by our readers and are guaranteed to satisfy your cravings.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {
          popularRecipe.map((recipe, index) => <RecipeCard key={index} recipe={recipe}></RecipeCard>)
        }
      </div>
    </div>
  );
};

export default PopularRecipes;