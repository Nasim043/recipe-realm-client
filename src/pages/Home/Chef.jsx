import React from 'react';

const Chef = ({ chef }) => {
  const { chef_name, num_of_recipes, likes, years_of_experience, chef_picture } = chef;
  return (
    <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
      <figure>
        <img className='object-cover w-full h-full' src={chef_picture} alt={chef_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <p>{num_of_recipes}</p>
        <p>{likes}</p>
        <p>{years_of_experience}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default Chef;