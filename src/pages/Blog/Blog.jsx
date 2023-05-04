import React, { createRef } from 'react';
import { FaPrint } from 'react-icons/fa';
const ref = createRef();
import ReactToPdf from 'react-to-pdf'

const Blog = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-end'>
        <ReactToPdf targetRef={ref} filename="blog.pdf" x={.5} y={.5} scale={0.6}>
          {({ toPdf }) => (
            <button className='btn my-gradient text-white font-semibold px-6 py-3 rounded-md mt-4 capitalize border-0' onClick={toPdf}><FaPrint className='me-1'></FaPrint> Generate pdf</button>
          )}
        </ReactToPdf>
      </div>
      <div className='mb-6'>
        <main className="w-full max-w-7xl mx-auto mt-8" ref={ref}>
          <div className="text-lg sm:text-xl font-medium bg-sky-100 p-2 rounded-md mb-2">
            1. What is the differences between uncontrolled and controlled components?
          </div>
          <div className="text-base sm:text-lg mb-4">
            In React, components can be categorized as controlled or uncontrolled based on how they manage their state data.
            Uncontrolled components manage their state internally without help from the parent component or outside world, while controlled components receive their initial and updated value from their parent through props and notify their parent.
            In a controlled component the parent have the full control over the state.
          </div>
          <div className="text-lg sm:text-xl font-medium bg-sky-100 p-2 rounded-md mb-2">
            2. How to validate React props using PropTypes?
          </div>
          <div className="text-base sm:text-lg mb-4">
            PropTypes is a typechecking library in React that helps to validate the data types and values of props passed to components.
            It is ensuring the components receive the correct type of data and reducing errors.
            To use it, import it from the 'prop-types' package and add a 'propTypes' object to the component.
          </div>
          <div className="text-lg sm:text-xl font-medium bg-sky-100 p-2 rounded-md mb-2">
            3. what is the difference between nodejs and express js?
          </div>
          <div className="text-base sm:text-lg mb-4">
            Node.js is a run-time environment for building server-side event-driven i/o application using javascript.
            While Express.js is a framework based on node.js for building web-application using principles and approaches of node.js.
            The main difference between Node.js and Express.js is that Node.js provides a runtime environment for executing JavaScript code,
            while Express.js is a framework built on top of Node.js for building web applications. Node.js provides the foundation for building
            server-side applications, while Express.js provides a set of tools and utilities for building web applications quickly and efficiently.
          </div>

          <div className="text-lg sm:text-xl font-medium bg-sky-100 p-2 rounded-md mb-2">
            4. What is a custom hook, and why will you create a custom hook?
          </div>
          <div className="text-base sm:text-lg mb-4">
            Custom hooks in React are reusable functions that can be shared across multiple components to extract logic and stateful behavior.
            They are created using the use prefix and return an array or object with state values and functions.
            Custom hooks can be useful in several scenarios, such as code reuse, abstraction and code organization.
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;