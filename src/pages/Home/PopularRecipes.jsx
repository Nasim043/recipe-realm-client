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
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {
          popularRecipe.map((recipe,index) => <RecipeCard key={index} recipe={recipe}></RecipeCard>)
        }
      </div>
    </div>
  );
};

export default PopularRecipes;