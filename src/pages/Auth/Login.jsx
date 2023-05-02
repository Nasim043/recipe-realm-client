import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="my-container">
      <div className="card w-11/12 sm:w-4/5 max-w-xl mx-auto shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
              <p className='label-text-alt'>Don't have an account?  <Link to='../register' className="label-text-alt link link-hover">Register</Link></p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-primary mb-2"><FaGoogle></FaGoogle> Login with Google</button>
            <button className="btn btn-outline"><FaGithub></FaGithub> Login with Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;