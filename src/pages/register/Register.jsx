import React, { useState } from 'react';
import './register.scss'
import FormInput from '../../component/formInput/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { FacebookTwoTone, Google } from '@mui/icons-material';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Register = () => {
  const[inputValues, setInputValues]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
});

const navigate = useNavigate();

const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage: "Username should be 3-16 characters and shouldn't include special character",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Its should be a valid email address",
    required: true
  },
  {
    id: 3,
    name: "password",
    type: "text",
    placeholder: "Password",
    errorMessage: "Password should be 8-20 characters and should include at least 1 letter, 1 number, 1 special character",
    pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
    required: true
  },
  {
    id: 4,
    name: "confirmPassword",
    type: "text",
    placeholder: "Confirm Password",
    errorMessage: "Password don't match",
    pattern: inputValues.password,
    required: true
  },
];

const handleChange =(e)=> {
  setInputValues({...inputValues, [e.target.name]: e.target.value})
}

  const handleRegister = async(e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth, 
        inputValues.email, 
        inputValues.password
        )
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValues.username, 
        })
        navigate('/login')
      })
  
    } catch (error) {}
  }

  return (
    <div className='register'>
      <form>
        <h2>Create an account</h2>
        {inputs.map((input) => (
          <FormInput key={input.id} 
          {...input} 
          value={inputValues[input.name]} 
          onChange = {handleChange}
          />
        ))}
        <button type='submit' onClick={handleRegister}>Create account</button>
        <div className="formLink">
          <span>Already have an account?</span>
          <Link 
          to='/login' 
          className='formRegister'
          style={{textDecoration: 'none'}}>
            {" "}
            Login
            </Link>
        </div>

        <div className="line"></div>
        <div className="media-options">
          <Link to='#' 
          className='facebook' 
          style={{textDecoration: 'none'}}>
            <FacebookTwoTone className='facebookIcon'/>
            <span>Login with Facebook</span>
          </Link>
          <Link to='#' 
          className='google' 
          style={{textDecoration: 'none'}}>
            <Google className='googleIcon'/>
            <span>Signup with Google</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
