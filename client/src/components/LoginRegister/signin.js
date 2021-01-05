import React, { useState, useEffect } from 'react';
import { login } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

/**
* @author
* @function Signin
**/

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));  
    }

    if(auth.authenticate){
        return <Redirect to={`/upload`} />
    }

    return (
      <section class="form_popup">
        <div class="login_form" id="login_form">
          <div class="hd-lg">
            <img src="images/logo.png" alt="" />
            <span>Log into your Viralmu account</span>
          </div>
          <div class="user-account-pr">
            <form onSubmit={userLogin}>
              <div class="input-sec">
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div class="input-sec">
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div class="chekbox-lg">
                <label>
                  <input type="checkbox" name="remember" value="rem" />
                  <b class="checkmark"> </b>
                  <span>Remember me</span>
                </label>
              </div>
              <div class="input-sec mb-0">
                <button type="submit">Login</button>
              </div>
            </form>
            <a href="#" title="" class="fg_btn">Forgot password?</a>
          </div>
          <div class="fr-ps">
            <h1>Don’t have an account? <a href="/signup" title="" class="show_signup">Signup here.</a></h1>
          </div>
        </div>
      </section>
    );
  };

  export default Signin;
