import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignUpValidation';
import axios from "axios";

const SignUp = () => {
  const [value, setValue] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
  const { name, value } = event.target;
  if (name === 'email') {
    setValue((prev) => ({ ...prev, email: value }));
  } else {
    setValue((prev) => ({ ...prev, [name]: value }));
  }
};

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(value);
    setErrors(validationErrors);
    if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
      axios.post('http://localhost:3002/signup', value)
        .then(res => {
          navigate('/');
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='formContainer'>
      <div className='loginPage'>
        <h2>Sign-Up</h2>
        <form className='form' onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor="name">Name </label><br />
            <input onChange={handleInput} type="text" placeholder="Enter your name" name="name" />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className=''>
            <label htmlFor="email">Email </label><br />
            <input onChange={handleInput} type="email" placeholder="Enter email" name="email" />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password">Password </label><br />
            <input onChange={handleInput} type="password" placeholder="Enter password" name="password" />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button className='btn' type='submit'>SignUp</button>
          <p>Agree to our terms and conditions</p>
          <Link to='/'> <button className='btn'>Login</button></Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
