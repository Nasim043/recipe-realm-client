import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
  const navigate = useNavigate()
  const { register, logOut, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setemailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inside register");
    console.log(email);
    console.log(password);

    register(email, password)
      .then(result => {
        updateUserProfile(name, url)
          .then(result=>{
            handleLogOut();
          })
          .catch(error => console.log(error))
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate('/login');
      }).catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  }

  const handleName = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
  }

  const handleUrl = (e) => {
    const urlInput = e.target.value;
    setUrl(urlInput);
  }

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
      setemailError("Please provide a valid email");
    } else {
      setemailError("");
    }
  }
  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setpasswordError('Password should be at least 6 character long');
    } else {
      setpasswordError('');
    }
  }
  return (
    <div className="my-container">
      <div className="card w-11/12 sm:w-4/5 max-w-xl mx-auto shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" value={name} onChange={handleName} placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="text" value={url} onChange={handleUrl} placeholder="Photo Url" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" value={email} onChange={handleEmail} placeholder="email" className="input input-bordered" required />
              {emailError && <span className='text-red-500 text-sm mt-1 error'>{emailError}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" value={password} onChange={handlePassword} placeholder="password" className="input input-bordered" required />
              {passwordError && <span className='text-red-500 text-sm mt-1 error'>{passwordError}</span>}
              <label className="label">
                <p className="label-text-alt">Already Have an Account? <Link to="../login" className="label-text-alt link link-hover">Login</Link></p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;