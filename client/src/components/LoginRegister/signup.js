import React from 'react';



export default class FormRegis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value})
  }

  handleEmail(event) {
    this.setState({ email: event.target.value })
  }

  handlePassword(event) {
    this.setState({ password: event.target.value })
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

        <div class="signup_form" id="signup_form">
          <div class="hd-lg">
            <img src="images/logo.png" alt="" />
            <span>Register your Viralmu account</span>
          </div>
          <div class="user-account-pr">
            <form>
              <div class="input-sec mgb25">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div class="input-sec">
                <input type="email" name="email" placeholder="Email address" />
              </div>
              <div class="input-sec">
                <input type="Password" name="password" placeholder="Password" />
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
}
