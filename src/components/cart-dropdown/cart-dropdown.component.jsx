import React from 'react';
//pro umozneni pristupu k cart-item:
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors';//po zavedeni selectoru muzeme import a dale upravit nize mapStateToProps


const CartDropdown = ({ cartItems }) => (//cartItems jsme si zalozili v cart.reducer
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
//pro pristup k cart-item.comp:
// ({ cart: { cartItems } })----- vezme cely state, vytahne z nej cart a z nej pak items
// const mapStateToProps = ({ cart: { cartItems } }) => ({//cartItems vytahujeme z cart.reducer 
//     cartItems
// });
//po zavedeni a import selectoru muzeme upravit:
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
// export default CartDropdown;
export default connect(mapStateToProps)(CartDropdown);
