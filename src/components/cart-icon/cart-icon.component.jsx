import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; //nutne k vytvoreni nove komponenty Logo
import './cart-icon.style.scss';


// const CartIcon = () => {//po zavedeni mapDispatchToProps nize toto tady upravime
const CartIcon = ({ toggleCartHidden }) => {//a nasledne doplnime onClick do div
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>1</span>
        </div>
    );
}

//toto zase vlozime po zavedeni connect na cart actions
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// export default CartIcon; //toto musime upravit po zavedeni connect na cart actions
export default connect(null, mapDispatchToProps)(CartIcon);