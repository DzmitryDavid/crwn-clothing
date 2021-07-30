import React, { Component } from 'react'
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import {auth, createUserProfile} from '../../firebase/firebase.utils';

import './SignUp.scss';


class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword } = this.state;
    
    if(password !== confirmPassword) {
      alert("passwords don't match")
      return;
    }
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password) 
      await createUserProfile(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(error.message);
    }
  } 
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }
  render() {
    const {displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
          <span>Sign In with your email and password</span>
          <form
            className="sign-up-form"
            onSubmit={this.handleSubmit}
            action="">
              <FormInput
                type="text"
                name='displayName'
                value={displayName}
                label="Display Name"
                onChange={this.handleChange}
                required
              />
              <FormInput
                type="email"
                name='email'
                value={email}
                label="Email"
                onChange={this.handleChange}
                required
              />
              <FormInput
                type="password"
                name='password'
                value={password}
                label="Password"
                onChange={this.handleChange}
                required
              />
              <FormInput
                type="password"
                name='confirmPassword'
                value={confirmPassword}
                label="Confirm Password"
                onChange={this.handleChange}
                required
              />
              <CustomButton onClick={this.handleSubmit}>SIGN UP</CustomButton>
          </form>
      </div>
    )
  }
 
}

export default SignUp;
