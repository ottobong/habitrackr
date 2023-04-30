import React, { useState } from 'react'
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FacebookTwoTone, Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const [inputs, setInputs]= useState({
    email: "",
    password: "",
  });

  const[toggleEye, setToggleEye] = useState(false);
  const[inputType, setInputType] = useState("password");
  const navigate = useNavigate()

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password")
  };

  const handleChange = (e)=>{
    setInputs((prev) => ({ ...prev, [e.target.name]:e.target.value})
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          navigate('/');
        })

    } catch(error){}
  }


  console.log(inputs);

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
        <button type='submit' onClick={handleLogin}>Login</button>
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
