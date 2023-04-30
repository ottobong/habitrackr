import React, { useState } from 'react'
import './login.scss';
import { Link } from 'react-router-dom';
import { FacebookTwoTone, Google, Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {

  const [inputs, setInputs]= useState({
    email: "",
    password: "",
  });

  const[toggleEye, setToggleEye] = useState(false);
  const[inputType, setInputType] = useState("password")

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password")
  };

  const handleChange = (e)=>{
    setInputs((prev) => ({ ...prev, [e.target.name]:e.target.value})
    );
  }

  return (
    <div className='login'>
      <form>
        <h2>Login</h2>
        <div className='formInput'>
          <input 
          type="email"
          name="email" 
          placeholder="Email"
          onChange={handleChange}
          required 
          />
        </div>
        <div className='formInput'>
          <input 
          type={inputType}
          name="password" 
          id="password"
          placeholder="Password"
          onChange={handleChange}
          required 
          />
          <div className="eyeIcon" onClick={handleToggle}>
            {toggleEye ? <Visibility /> : <VisibilityOff />}
          </div>
        </div>
        <button type='submit'>Login</button>
        <div className="formLink">
          <span>Don't have an account?</span>
          <Link 
          to='/register' 
          className='formRegister'
          style={{textDecoration: 'none'}}>
            {" "}
            Create an account
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
            <span>Continue with Google</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
