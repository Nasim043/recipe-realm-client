import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
  const [chefs, setChefs] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/chefs')
      .then((result) => result.json())
      .then((data) => setChefs(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className='my-container grid grid-cols-1 md:grid-cols-3 gap-4 mb-24'>
      {
        chefs.map(chef => (
          <Chef key={chef.chef_id} chef={chef} />
        ))
      }
    </div>
  );
};

export default Chefs;