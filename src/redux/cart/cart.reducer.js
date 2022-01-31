import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';


const INITIAL_STATE = {
    hidden: true, //na zacatku chceme, aby dropdown menu bylo skryte
    cartItems: [] //pole pro vkladani items
};

const cartReducer = (state = INITIAL_STATE, action) => { //nejdriv bude state initial, dokud nebude nejaky jiny
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //! zajisti zmenu hodnoty
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload] //slouci puvodni a nove items; toto nasledne menime po zavedeni cart.utils, 
                //kdy dynamicky menime pocet shodnych polozek v kosiku
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}

export default cartReducer;