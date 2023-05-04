import React, { useEffect, useState } from 'react';;
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import RecipeDetails from './RecipeDetails';


const ChefRecipes = () => {
  const [chef, setChef] = useState([])
  const chefRecipe = useLoaderData()
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/chefs')
      .then((result) => result.json())
      .then((data) => {
        setChef(data.filter(chef => chef.chef_id === parseInt(id)))
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='my-container'>
      <div className="flex flex-wrap bg-gray-100 mb-7 items-center">
        <div className="w-full sm:w-8/12">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                <span className="text-green-700">{chef[0]?.chef_name}</span>
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-2 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-2xl lg:text-4xl font-bold">{chef[0]?.years_of_experience} years of experience</h1>
                <h1 className="text-2xl lg:text-4xl font-bold">{chef[0]?.num_of_recipes} recipes</h1>
                <h1 className="text-2xl lg:text-4xl font-bold">{chef[0]?.likes} Likes</h1>
                <div className="w-20 h-2 bg-green-700 my-4"></div>
                <p className="text-xl mb-10">{chef[0]?.description}</p>
              </div>
            </header>
          </div>
        </div>
        <img src={chef[0]?.chef_picture} alt={chef[0]?.chef_name} className="w-full max-h-[70vh] object-cover sm:w-4/12" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {
          chefRecipe?.map((recipe, index) => (
            <RecipeDetails key={index} recipe={recipe}></RecipeDetails>
          ))
        }
      </div>
    </div>
  );
};

export default ChefRecipes;