import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
  const { chef_id, chef_name, num_of_recipes, likes, years_of_experience, chef_picture } = chef;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <LazyLoad height={'max-height: 50vh'}>
        <img className='object-cover w-full max-h-[50vh]' src={chef_picture} alt={chef_name} />
      </LazyLoad>
      <div className="card-body">
        <h2 className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{chef_name}</h2>
        <p className="text-gray-500 text-sm">{years_of_experience} years of experience</p>
        <p className="text-gray-500 text-sm">{num_of_recipes} recipes</p>
        <p className="text-gray-500 text-sm">{likes} likes</p>
        <div className="card-actions justify-end">
          <Link className="btn my-gradient text-white font-semibold px-6 py-3 rounded-md mt-4 capitalize border-0" to={`chefs/${chef_id}`}>
            <FaRegEye className='me-2'></FaRegEye>View Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;