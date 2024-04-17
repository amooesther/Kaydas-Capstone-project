import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../LoginValidation';
import NavBar from '../NavBar/NavBar';
import loginImg1 from '../../Assets/loginImg1.png';
import Footer from '../footer/Footer';
import axios from 'axios';
import './Login.css'; // Import CSS file

const Login = () => {
  const [value, setValue] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const history = useNavigate();

  const handleInput = (event) => {
    const { id, value } = event.target;
    setValue((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(value);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3002/signup', {
          email: value.email,
          password: value.password,
        });

        if (response.status === 200) {
          // Login successful
          history('/'); // Redirect to home page or dashboard
        } else {
          // Invalid credentials or other errors
          alert(response.data.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error occurred while logging in. Please try again.');
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className='formContainer'>
        <div className='loginPage'>
          <div className='loginImg'>
            <img src={loginImg1} alt='' />
          </div>
          <form onSubmit={handleSubmit} className='form'>
            <div className=''>
              <label htmlFor='email'>Email </label>
              <br />
              <input onChange={handleInput} type='email' placeholder='Enter email' id='email' />
              {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div>
              <label htmlFor='password'>Password </label>
              <br />
              <input onChange={handleInput} type='password' placeholder='Password' id='password' />
              {errors.password && <span className='error'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn'>
              Login
            </button>
            <Link to='/signup'>
              <button type='button' className='btnSignUp'>
                SignUp
              </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
