import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


export default class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmail(value) {
    this.setState({ email: value })
  }

  handlePassword(value) {
    this.setState({ password: value })
  }

  handleLogin() {
    this.props.loginProcess(
      this.state.email,
      this.state.password
    )

  }

  render() {

    return (
      <section class="form_popup">
        <div class="login_form" id="login_form">
          <div class="hd-lg">
            <img src="images/logo.png" alt="" />
            <span>Log into your Oren account</span>
          </div>
          <div class="user-account-pr">
            <form>
              <div class="input-sec">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div class="input-sec">
                <input type="Password" name="password" placeholder="Password" />
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
            <h1>Don’t have an account? <a href="signup.html" title="" class="show_signup">Signup here.</a></h1>
          </div>
        </div>
      </section>
    );
  };
}

