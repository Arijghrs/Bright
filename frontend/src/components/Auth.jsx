import signup from '../assets/signup.png';
import signin from '../assets/signin.png';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import OAuth from './OAuth.jsx';
import FAuth from './FAuth.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice.js';




const Auth = ({ showModal, onClose, openSignIn }) => {
  if (!showModal) {
    return null;
  }
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    
};
console.log(formData);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-slate-600 shadow-md rounded-none flex max-w-2xl w-full relative z-10">
        {/* Left Side */}
        <div className="w-1/2 bg-cover p-8" style={{ backgroundImage: `url(${signup})` }}>
          <h2 className="font-caprasimo font-thin text-3xl mt-[30%] mb-[20%] text-white text-center">
            Already <br /> have an <br /> account
          </h2>
          <p className="font-montserrat text-xs text-center mt-[24%] mb-[20%] text-white tracking-wide relative z-10">
            Login with your account and <br /> access your courses, mentors <br /> and more!
          </p>
          <button
            className="relative w-48 h-8 py-1 px-3 border mt-2 ml-10 border-black text-black font-semibold bg-white flex items-center justify-center"
            onClick={openSignIn}
          >
            <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-yellow z-0"></span>
            <span className="absolute inset-0 border border-black bg-white z-10"></span>
            <span className="relative z-20 font-caprasimo text-xl font-normal">Sign In</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center p-4 bg-white">
          <h2 className="text-5xl font-caprasimo mb-2">Sign Up</h2>
          <p className="text-sm font-caprasimo mt-2 ml-10">with</p>
          <div className="flex space-x-4 mb-4">
            <button className="relative w-32 h-8 py-1 px-3 border mt-2 ml-8 border-black text-black font-semibold bg-white">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-inter text-sm flex items-center justify-center">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2 w-5" />Gmail
              </span>
            </button>
            <button className="relative w-28 h-8 py-1 px-3 border mt-2 mr-2 border-black text-black font-semibold bg-white">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-inter text-sm flex items-center justify-center">
                <img src="https://img.icons8.com/color/16/000000/facebook.png" alt="Facebook" className="mr-2 w-5" />Facebook
              </span>
            </button>
          </div>
          <p className="text-sm font-caprasimo mb-7 ml-10">Or</p>
          <form onSubmit={handleSubmit} className="w-full max-w-xs ml-10 -mt-10">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 mt-8 ml-8 text-xs font-montserrat"
                id='username'
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail address"
                className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 ml-8 text-xs font-montserrat"
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 ml-8 text-xs font-montserrat"
                id='password'
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm password"
                className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 ml-8 text-xs font-montserrat"
                id='password'
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone number (+216)"
                className="border p-2 border-gray-400 shadow-shdInsetPurp h-10 w-48 ml-8 text-xs font-montserrat"
                id='phone'
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center ml-8">
              <input type="checkbox" className="mr-2 w-6 h-4" />
              <p className="text-xs font-inter">
                I understand and agree to the<button className="text-purp">Terms and privacy conditions</button>
              </p>
            </div>
            <button
              disabled = {loading}
              className="relative w-48 h-8 py-1 px-3 border mt-2 ml-8 border-black text-black font-semibold bg-white flex items-center justify-center"
              >
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-caprasimo text-xl font-normal"> {loading ? 'Loading...' : 'sign up'}</span>
            </button>

          </form>
         {/* {error && <p className='text-red  mt-5'>{error}</p>}*/} 
          <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-black  ">X</button>
        </div>
      </div>
    </div>
  );
};

const SignIn = ({ showModal, onClose, openSignUp }) => {
  if (!showModal) {
    return null;
  }

  const [formData, setFormData] = useState({});
  const  {loading,error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/dashboard');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="fixed inset-0 flex items-center  justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-slate-600 shadow-md rounded-none flex max-w-2xl w-full relative z-10">
        {/* Left Side */}
        <div className="w-1/2 bg-cover p-8" style={{ backgroundImage: `url(${signin})` }}>
          <h2 className="font-caprasimo font-thin text-3xl mt-[30%] mb-[20%] text-white text-center">
            Don't have an <br /> account?
          </h2>
          <p className="font-montserrat text-xs text-center mt-[24%] mb-[20%] text-white tracking-wide relative z-10">
            Sign up with your account and <br /> access your courses, mentors <br /> and more!
          </p>
          <button
            className="relative w-48 h-8 py-1 px-3 border mt-2 ml-10 border-black text-black font-semibold bg-white flex items-center justify-center"
            onClick={openSignUp}
          >
            <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
            <span className="absolute inset-0 border border-black bg-white z-10"></span>
            <span className="relative z-20 font-caprasimo text-xl font-normal">Sign Up</span>
          </button>

        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center p-4 bg-white">
          <h2 className="text-5xl font-caprasimo mb-11 mr-7">Sign In</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-xs ml-4 -mt-10">
            <div className="mb-4">
              <input 
              
              type="text" placeholder="E-mail address" 
              className="border p-2 border-gray-400 shadow-shdInset h-10 w-48 mt-8 ml-8 text-xs font-montserrat"
              id="email"
              onChange={handleChange} 
               />
            </div>
            <div className="mb-4">
              <input 
              
              type="password" placeholder="Password" 
              className="border p-2 border-gray-400 shadow-shdInset h-10 w-48 ml-8 text-xs font-montserrat" 
              id="password"
              onChange={handleChange} 
              />
            </div>
            <div>
              <p className="text-darkblue font-montserrat text-xs -mt-3 ml-36">Forgot password?</p>
            </div>
            <button
              className="relative w-48 h-8 py-2 px-3 border mt-8 ml-8 border-black text-black font-semibold bg-white flex items-center justify-center"
              /*onClick={onClose}*/
              disabled={loading}
            >
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-yellow z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 font-caprasimo text-2xl font-normal">{loading ? 'Loading...' : 'sign in'}</span>
            </button>

          </form>
          <p className="text-sm font-caprasimo mt-4 ml-2">Or use</p>
          <div className="flex space-x-4 mb-4">
            <OAuth/>
            <FAuth/>
          </div>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
          <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-black text-2xl font-bold">X</button>
        </div>
      </div>
    </div>
  );
};

const Popup = ({ buttonText, buttonAction, buttonSize }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openModal = (modalType) => {
    if (modalType === 'signIn') {
      setShowSignIn(true);
      setShowSignUp(false);
    } else if (modalType === 'signUp') {
      setShowSignUp(true);
      setShowSignIn(false);
    }
  };

  const closeModal = (modalType) => {
    if (modalType === 'signIn') {
      setShowSignIn(false);
    } else if (modalType === 'signUp') {
      setShowSignUp(false);
    }
  };

  return (
    <div className="Popup">
      {/* Bouton dynamique */}
      <button onClick={() => openModal(buttonAction)} className="relative h-10 w-${buttonSize} py-1 px-3 border mt-2 ml-28 border-black text-black font-semibold bg-white cursor-pointer hover:transform hover:translate-x-[-2px] hover:translate-y-[2px]">
        <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
        <span className="absolute inset-0 border border-black bg-white z-10"></span>
        <span className="relative z-20 font-caprasimo text-[26px] font-normal">{buttonText}</span>
      </button>


      <Auth showModal={showSignUp} onClose={() => closeModal('signUp')} openSignIn={() => openModal('signIn')} />
      <SignIn showModal={showSignIn} onClose={() => closeModal('signIn')} openSignUp={() => openModal('signUp')} />
    </div>
  );
};

export default Popup;