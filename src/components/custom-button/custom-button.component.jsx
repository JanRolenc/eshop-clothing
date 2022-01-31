import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (//isGoogleSignIn dame do sign-in component
    <button className=
        {
            `${isGoogleSignIn ? 'google-sign-in' : ''}
            ${inverted ? 'inverted' : ''} 
            custom-button`
        }
        {...otherProps}
    >
        {children}
    </button>

)

export default CustomButton;