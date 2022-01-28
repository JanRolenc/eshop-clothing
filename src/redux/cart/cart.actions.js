import CartActionTypes from './cart.types'; //toto importujeme po zavedeni user.types

export const toggleCartHidden = cart => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: cart
});