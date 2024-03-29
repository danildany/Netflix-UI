import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Register.scss'
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const emailRef = useRef();
    const passwordRef = useRef();
  
    const handleStart = () => {
      setEmail(emailRef.current.value);
    };
    const handleFinish = () => {
      setPassword(passwordRef.current.value);
    };
    return (
        <div className="register">
            <div className="top">
            <div className="wrapper">
            <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            />
            <NavLink exact to ='/login' className='navlink'>
            <button className="btn-login">Sign in</button>
            </NavLink>
            </div>
            </div>
            <div className="container">
             <h1>Unlimited movies, TV shows, and more.</h1>
             <h2>Watch anywhere. Cancel anytime.</h2>
             <p>
                 Ready to watch? Enter your email to create or restart your membership.
             </p>
             {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="btn-register" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="btn-register" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
            </div>
        </div>
    )
}

export default Register
