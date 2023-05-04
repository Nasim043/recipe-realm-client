import React from 'react';
import { FaRegHeart } from 'react-icons/fa'
import { Rating } from '@smastrom/react-rating';
import { toast } from 'react-toastify';

const RecipeDetails = ({ recipe }) => {

  const handleClick = event => {
    event.currentTarget.disabled = true;
    toast.success('Successfully added to favourites')
  };

  return (
    <div className="card w-full bg-[#E9E9E9] shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{recipe.recipe_name}</h2>
        <p className='text-base'><span className='me-1 font-semibold'>ingredients:</span>{recipe.ingredients?.map((ingredient, index) => {
          return <span key={index} className='me-1'>{ingredient},</span>
        })}</p>
        <p className='text-base'><span className='me-1 font-semibold'>Cooking method:</span>{recipe.cooking_method}</p>
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
  );
};

export default RecipeDetails;