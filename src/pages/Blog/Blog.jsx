import React, { createRef } from 'react';
const ref = createRef();
import ReactToPdf from 'react-to-pdf'

const Blog = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-end'>
        <ReactToPdf targetRef={ref} filename="blog.pdf">
          {({ toPdf }) => (
            <button className='btn my-gradient text-white font-semibold px-6 py-3 rounded-md mt-4 capitalize border-0' onClick={toPdf}>Generate pdf</button>
          )}
        </ReactToPdf>
      </div>
      <div className='mb-6' ref={ref}>
        <main className="w-full max-w-7xl mx-auto mt-8">
          <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-lg sm:text-xl font-medium bg-sky-100">
              1. When should you use context API?
            </div>
            <div className="collapse-content">
              <div className="text-base sm:text-lg">
                Context API is a powerful tool in React that enables passing data down the component tree without having to pass props through every level of the hierarchy. It can be used for various scenarios, such as theming, authentication, multi-language support, and global state management. It is useful for data that needs to be shared across multiple components or when there is a complex component hierarchy. However, it is important to use it cautiously and only when necessary.
              </div>
            </div>
          </div>
          <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-lg sm:text-xl font-medium bg-sky-100">
              2. What is a custom hook?
            </div>
            <div className="collapse-content">
              <div className="text-base sm:text-lg">
                Custom hooks in React allow you to reuse stateful logic across multiple components in a single function, encapsulating complex state management and other functionality needed for reuse.
                According to the convention, a custom hook name should always start with the word "use" and should reflect the purpose of the hook.
              </div>
            </div>
          </div>
          <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-lg sm:text-xl font-medium bg-sky-100">
              3. What is useRef?
            </div>
            <div className="collapse-content">
              <div className="text-base sm:text-lg">
                refs are perfect for storing information that doesn’t affect the visual output of your component.
                <code>useRef</code> returns a ref object with a single current property initially set to the initial value we provided.
                You can mutate the <code>ref.current</code> property. Unlike state, it is mutable. When you change the <code>ref.current</code> property, React does not re-render your component.
              </div>
            </div>
          </div>
          <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-lg sm:text-xl font-medium bg-sky-100">
              4. What is useMemo?
            </div>
            <div className="collapse-content">
              <div className="text-base sm:text-lg">
                <b>2 common use cases of useMemo:</b>
                <ul className="list-decimal list-inside">
                  <li>When you want to make a slow function wrap inside useMemo so that doesn't re-compute every single time you render your component and it only computed when you acually need the value from that function since the inputs actually change.</li>
                  <li>Whenever you want to make sure the reference of an object or an array is exactly the same as it was the last time you rendered if none of the internal workings changed, you're gonna want to useMemo here to make sure that you only update the reference of that object whenever the actual contents of the object change instead of updating every single time you render.</li>
                </ul>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;