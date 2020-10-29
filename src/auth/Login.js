import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    if (
      this.state.username === "admin" &&
      this.state.password === "admin@123"
    ) {
      alert("Login Sucessfully");
    }
  };
  render() {
    return (
      <div>
        <form className="login-wrapper" onSubmit={this.handleSubmit}>
          <div className="login-form">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="Username..."
              onChange={this.handleChange}
            />
            <label> Password </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password..."
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
