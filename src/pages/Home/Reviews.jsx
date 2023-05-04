import React from 'react';

const Reviews = () => {
  return (
    <div className='my-container mb-10'>
      <h1
        className="text-xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-normal text-center">
        Our Happy Clients Say
      </h1>
      {/* <div className="carousel w-full bg-[#F9F6F6]">
        <div id="item1" className="carousel-item w-full h-96 flex flex-col items-center justify-center bg-[#F9F6F6]">
          <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            "I've tried many Chinese food recipes in the past, but none come close to the
            amazing flavors and aromas of the dishes from this website. I especially love the Kung Pao Chicken - it's a family favorite!"</p>
          <p className='mb-3 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            ~ Jie Zhang
          </p>
          <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            Customer
          </p>
        </div>

        <div id="item2" className="carousel-item w-full h-96 flex flex-col items-center justify-center bg-amber-100">
          <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            "As someone who grew up eating Chinese food, I can confidently say that these recipes are the real deal. The attention to detail
            and use of authentic ingredients make for an incredibly delicious dining experience. The Shrimp Wontons are a must-try!"
          </p>
          <p className='mb-3 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            ~ Samantha Jones
          </p>
          <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            Customer
          </p>
        </div>
        <div id="item3" className="carousel-item w-full h-96 flex flex-col items-center justify-center bg-amber-100">
          <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            "I never thought I could replicate my favorite Chinese takeout dishes at home, but these recipes have completely changed my mind.
            The Spicy Tofu is better than any restaurant version I've had, and the step-by-step instructions make it so easy to follow along.
            Highly recommend!"
          </p>
          <p className='mb-3 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            ~ Tom Wilson
          </p>
          <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
            Client
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
      </div> */}

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-96 bg-[#F9F6F6]">
          <div className='flex flex-col items-center justify-center mx-auto'>
            <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
              "I've tried many Chinese food recipes in the past, but none come close to the
              amazing flavors and aromas of the dishes from this website. I especially love the Kung Pao Chicken - it's a family favorite!"</p>
            <p className='mb-3 text-center text-gray-500 font-semibold mx-auto'>
              ~ Jie Zhang
            </p>
            <p className='mb-7 text-center text-gray-500 mx-auto'>
              Customer
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle opacity-20 hover:opacity-100">❮</a>
            <a href="#slide2" className="btn btn-circle opacity-20 hover:opacity-100">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-96 bg-[#F9F6F6]">
          <div className='flex flex-col items-center justify-center mx-auto'>
            <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
              "As someone who grew up eating Chinese food, I can confidently say that these recipes are the real deal. The attention to detail
              and use of authentic ingredients make for an incredibly delicious dining experience. The Shrimp Wontons are a must-try!"
            </p>
            <p className='mb-3 text-center text-gray-500 font-semibold mx-auto'>
              ~ Samantha Jones
            </p>
            <p className='mb-7 text-center text-gray-500 mx-auto'>
              Customer
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle opacity-20 hover:opacity-100">❮</a>
            <a href="#slide3" className="btn btn-circle opacity-20 hover:opacity-100">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-96 bg-[#F9F6F6]">
          <div className='flex flex-col items-center justify-center mx-auto'>
            <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>
              "I never thought I could replicate my favorite Chinese takeout dishes at home, but these recipes have completely changed my mind.
              The Spicy Tofu is better than any restaurant version I've had, and the step-by-step instructions make it so easy to follow along.
              Highly recommend!"
            </p>
            <p className='mb-3 text-center text-gray-500 font-semibold mx-auto'>
              ~ Tom Wilson
            </p>
            <p className='mb-7 text-center text-gray-500 mx-auto'>
              Client
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle opacity-20 hover:opacity-100">❮</a>
            <a href="#slide1" className="btn btn-circle opacity-20 hover:opacity-100">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;