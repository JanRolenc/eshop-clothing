import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        }
    }
    //funkce vymaze hodnoty po odeslani
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };
    //fce komponovana jako univerzalni ke zpracovani jak emailu tak passwordu
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'//toto jsme doplnili, aby fungovalo stylovani 
                        required
                    />
                    {/* <label>Email</label> muzeme odstranit*/}
                    <FormInput
                        name='current-password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    {/* <label>Password</label> muzeme odstranit */}
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                        {/* isGoogleSignIn atribut pry vraci true, pokud mu neprirazujeme hodnotu */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;