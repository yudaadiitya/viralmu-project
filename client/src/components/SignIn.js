import React from 'react';

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

