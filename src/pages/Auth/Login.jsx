import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    login(email, password)
      .then(result => {
        e.target.reset();
        console.log(result.user);
        toast.success('LogIn successful');
        navigate('/')
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div className="my-container">
      <div className="card w-11/12 sm:w-4/5 max-w-xl mx-auto shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" value={email} onChange={handleEmail} placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" value={password} onChange={handlePassword} placeholder="password" className="input input-bordered" required/>
              <label className="label">
                <p className='label-text-alt'>Don't have an account?  <Link to='../register' className="label-text-alt link link-hover">Register</Link></p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-primary mb-2"><FaGoogle className='me-2'></FaGoogle> Login with Google</button>
            <button className="btn btn-outline"><FaGithub className='me-2'></FaGithub> Login with Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;