import React from 'react';
import { Rating } from '@smastrom/react-rating';

const RecipeCard = ({recipe}) => {
  return (
    <div className='shadow-lg flex flex-col rounded-lg bg-[#E9E9E9]'>
      <div className="relative">
        <a href="#">
          <img className="w-full rounded-lg"
            src={recipe.recipe_image}
            alt={recipe.recipe_name} />
          <div
            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 rounded-lg">
          </div>
        </a>
        <div
          className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          <div className='flex justify-center items-center'>
            <Rating style={{ maxWidth: 100 }} readOnly value={1} className='me-1' items={1}/>
            <p className='pt-1'>{recipe.rating}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <a className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{recipe.recipe_name}</a>
        {/* <p className="text-gray-500 text-sm">
                    The city that never sleeps
                  </p> */}
      </div>
    </div>
  );
};

export default RecipeCard;