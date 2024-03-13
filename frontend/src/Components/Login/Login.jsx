import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Validation from '../LoginValidation';

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(value);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with login logic or API call
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className='formContainer'>
      <div className='loginPage'>
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit} className='form'>
          <div className=''>
            <label htmlFor="email">Email </label><br />
            <input onChange={handleInput} type="email" placeholder="Enter email" name='email' />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password">Password </label><br />
            <input onChange={handleInput} type="password" placeholder="Password" name='password' />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type='submit' className='btn'>Login</button>
          <p>You agree to our terms and conditions</p>
          <Link to='/SignUp'><button className='btn'>Create Account</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
