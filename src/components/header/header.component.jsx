import React from 'react';
import { Link } from 'react-router-dom';//toto potrebuji kvuli "po klik na icon prejdi na homepage" 
import { ReactComponent as Logo } from '../../assets/crown.svg'; //nutne k vytvoreni nove komponenty Logo
import './header.style.scss';

const Header = () => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            <Link className="option" to="/signin">SIGN IN</Link>
            {/* <img className="option" src="./shopping_icon.png" alt="icon" /> */}
        </div>
    </div>
)

export default Header;