import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
  const [chefs, setChefs] = useState([])

  useEffect(() => {
    fetch('https://b7a10-chef-recipe-hunter-server-side-nasim043-nasim043.vercel.app/chefs')
      .then((result) => result.json())
      .then((data) => setChefs(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className='my-container mt-10'>
      <h1
        className="text-xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-normal text-center">
        Our chefs
      </h1>
      <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>Our talented chefs bring a wealth of culinary expertise and creativity to our recipes, ensuring that every dish is made with passion and care.</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-24'>
        {
          chefs.map(chef => (
            <Chef key={chef.chef_id} chef={chef} />
          ))
        }
      </div>
    </div>
  );
};

export default Chefs;