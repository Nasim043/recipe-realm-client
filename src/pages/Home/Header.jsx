import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="my-container text-gray-600 body-font bg-gray-100 p-20 rounded-2xl">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
        <div
          className="md:w-1/2 md:px-2 mb-10 md:mb-0">
          <h1
            className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Lets start cooking with popular recipes
          </h1>
          <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed text-myblack">
            It is even better than an expensive cookery book.
            Learn how to make your favorite restaurant’s dishes.
          </p>
          <div className="flex justify-center">
            <a href="#"
              className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
              Exploring
            </a>
            <Link to='/blog'
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
              articles</Link>
          </div>
        </div>
        <div className="md:w-1/2">
          {/* <img className="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg" /> */}
          <img className="w-full rounded-xl" alt="header" src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </div>
      </div>
    </section>
  );
};

export default Header;