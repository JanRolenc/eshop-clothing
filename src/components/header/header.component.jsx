import React from 'react';
import { Link } from 'react-router-dom';//toto potrebuji kvuli "po klik na icon prejdi na homepage" 
import { ReactComponent as Logo } from '../../assets/crown.svg'; //nutne k vytvoreni nove komponenty Logo
import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';//toto importujeme, kdyz zavadime redux
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser
                    ?
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)//metoda import z firebase
                    :
                    (<Link className="option" to="/signin">SIGN IN</Link>)
            }

            {/* <img className="option" src="./shopping_icon.png" alt="icon" /> */}
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }

    </div>
);
//kvuli redux zavadime: (nazev mapStateToProps je zavedeny standard, ale muze to byt jakykoliv nazev)
// const mapStateToProps = state => ({//state vola root-reducer, ten pak user-reducer...?
//     currentUser: state.user.currentUser
// });
//po zavedeni CartDropdown comp menime nasledovne:
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({//pouzil pokrocilejsi destructuring pro nested values
    currentUser,
    hidden//musime doplnit nahoru k const Header = ({ currentUser })
});

// export default Header; po zavedeni redux:
export default connect(mapStateToProps)(Header);