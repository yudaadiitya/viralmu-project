import React, { useState } from 'react';
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

      <div class="signup_form" id="signup_form">
        <div class="hd-lg">
          <img src="images/logo.png" alt="" />
          <span>Register your Viralmu account</span>
        </div>
        <div class="user-account-pr">
          <form onSubmit={userSignup}>
            <div class="input-sec mgb25">
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
          <h1>Already have an account?<a href="login.html" title="" class="show_signup"> Login here.</a></h1>
        </div>
      </div>

    </section>
  );
};

export default Signup;
