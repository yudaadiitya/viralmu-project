import React, { useState } from 'react';
<<<<<<< HEAD
import { signup } from '../../action/users';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {useEffect} from 'react'

/**
* @author
* @function Signup
**/

const Signup = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.loading) {
      setName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);


  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    dispatch(signup(user));
  };

  // if(auth.authenticate){
  //     return <Redirect to={`/`} />
  // }

  if (user.loading) {
    return <p>Loading...!</p>;
  }
  return (
    <section class="form_popup">

=======
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions/users";
import { useEffect } from "react";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypepassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");
  // const auth = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!user.loading) {
  //     setName("");
  //     setEmail("");
  //     setPassword("");
  //     setRetypePassword("");
  //   }
  // }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      retypepassword
    };

    dispatch(signup(user));
  };

  // if (auth.authenticate) {
  //   return <Redirect to={`/`} />;
  // }

  // if (user.loading) {
  //   return <p>Loading...!</p>;
  // }

  return (
    <section class="form_popup">

>>>>>>> ba4ceb946132aecdf45b9bc1358f25063c87046a
      <div class="signup_form" id="signup_form">
        <div class="hd-lg">
          <img src="images/logo.png" alt="" />
          <span>Register your Viralmu account</span>
        </div>
        <div class="user-account-pr">
          <form onSubmit={userSignup}>
            <div class="input-sec mgb25">
<<<<<<< HEAD
              <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="input-sec">
              <input type="email" name="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="input-sec">
              <input type="Password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class="input-sec">
              <input type="password" name="confirm-password" placeholder="Re-enter password" />
=======
              <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div class="input-sec">
              <input 
                type="email" 
                name="email" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="input-sec">
              <input 
                type="Password" 
                name="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="input-sec">
              <input 
                type="password" 
                name="retypepassword" 
                placeholder="Retype Password" 
                value={retypepassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
>>>>>>> ba4ceb946132aecdf45b9bc1358f25063c87046a
            </div>
            <div class="input-sec mb-0">
              <button type="submit">Signup</button>
            </div>
          </form>
          <div class="form-text">
            <p>By sIgning up you agree to Oren’s <a href="#" title="">Terms of Service</a> and <a href="#" title="">Privacy Policy</a> </p>
          </div>
        </div>
        <div class="fr-ps">
<<<<<<< HEAD
          <h1>Already have an account?<a href="login.html" title="" class="show_signup"> Login here.</a></h1>
=======
          <h1>Already have an account? <a href="/signin" title="" class="show_signup"> Login here.</a></h1>
>>>>>>> ba4ceb946132aecdf45b9bc1358f25063c87046a
        </div>
      </div>

    </section>
  );
};

export default Signup;
