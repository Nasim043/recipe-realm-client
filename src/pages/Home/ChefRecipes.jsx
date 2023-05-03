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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={chef[0]?.chef_picture} alt={chef[0]?.chef_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef[0]?.chef_name}</h2>
          <p>{chef[0]?.description}</p>
          <p>{chef[0]?.years_of_experience} years of experience</p>
          <p>{chef[0]?.num_of_recipes} recipes</p>
          <p>{chef[0]?.likes} Likes</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          chefRecipe?.map(recipe => {
            return (
              <div className="card w-full bg-amber-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{recipe.recipe_name}</h2>
                  <p>{recipe.ingredients?.map((ingredient, index) => {
                    return (
                      <span className='me-1' key={index}>{ingredient}</span>
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