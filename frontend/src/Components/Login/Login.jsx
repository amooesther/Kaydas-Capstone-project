import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Validation from '../LoginValidation';
import NavBar from '../NavBar/NavBar'
import loginImg1 from '../../Assets/loginImg1.png'
import Footer from '../footer/Footer';


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
    <div>
      <NavBar/>
      
    <div className='formContainer'>
      
      <div className='loginPage'>
        <div className='loginImg'>
          <img src={loginImg1} alt="" />
       
        </div>
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
   <Link to='/signup'><button type='submit' className='btnSignUp'>SignUp</button></Link>  
          
        </form>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
