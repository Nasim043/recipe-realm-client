import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful');
      }).catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  }


  return (
    <>
      <div className="navbar my-container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='blog'>Blog</Link></li>
              <li><Link to='login'>Login</Link></li>
              {user && <li><a>{user?.email}</a></li>}
            </ul>
          </div>
          <Link to='/' className="text-xl sm:text-3xl font-bold">RecipeRealm</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='blog'>Blog</Link></li>
            {user ? <li onClick={handleLogOut}>Logout</li> : <li><Link to='login'>Login</Link></li>}
            {user && <li><a>{user?.email}</a></li>}
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Navbar;