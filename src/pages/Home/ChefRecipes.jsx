import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const ChefRecipes = () => {
  const [chef, setChef] = useState([])
  const chefRecipe = useLoaderData()
  const { id } = useParams();

  const handleClick = event => {
    event.currentTarget.disabled = true;
    toast.success('Successfully added to favourites')
  };

  useEffect(() => {
    fetch('http://localhost:3000/chefs')
      .then((result) => result.json())
      .then((data) => {
        setChef(data.filter(chef => chef.chef_id === parseInt(id)))
      })
      .catch(error => console.log(error))
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
        <img src={chef[0]?.chef_picture} alt={chef[0]?.chef_name} class="w-full h-[70vh] object-cover sm:h-[70vh] sm:w-4/12" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {
          chefRecipe?.map(recipe => {
            return (
              <div className="card w-full bg-[#E9E9E9] shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{recipe.recipe_name}</h2>
                  <p>{recipe.ingredients?.map((ingredient, index) => {
                    return (
                      <span className='me-1' key={index}>{ingredient},</span>
                    )
                  })}</p>
                  <p>{recipe.cooking_method}</p>
                  <div className='flex justify-start items-center'>
                    <Rating style={{ maxWidth: 100 }} readOnly value={recipe.rating} className='me-1' />
                    <p className='pt-1'>{recipe.rating}</p>
                  </div>
                  <div className="form-control">
                    <button className="btn my-gradient text-white font-semibold px-6 py-3 rounded-md mt-4 capitalize border-0" onClick={handleClick}>
                      <FaRegHeart className='me-2'></FaRegHeart> favourite</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ChefRecipes;