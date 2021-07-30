import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props) {
    super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        const {value, name} = e.target; 
        this.setState({[name] : value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        label="email"
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        required/>
                        
                    <FormInput 
                        label="password"
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required/>
                    <div className="buttons">
                      <CustomButton 
                          type="submit">Sign In</CustomButton>
                      <CustomButton 
                          isGoogleSignIn
                          onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn; 