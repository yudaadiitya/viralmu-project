import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions/register";
import { useEffect } from "react";
import Swal from 'sweetalert2';

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypepassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(auth)

  useEffect(() => {
    if (!user.loading) {
      setName("");
      setEmail("");
      setPassword("");
      setRetypePassword("");
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      retypepassword
    };

    dispatch(signup(user));

    Swal.fire(
      'Yeay!',
      'You have been registered!',
      'success'
    )
  };

  if (auth.authenticate) {
    return <Redirect to={`/signin`} />;
  }

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
          <h1>Already have an account? <a href="/signin" title="" class="show_signup"> Login here.</a></h1>
        </div>
      </div>

    </section>
  );
};

export default Signup;
