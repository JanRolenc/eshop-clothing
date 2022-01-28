import CartActionTypes from './cart.types';


const INITIAL_STATE = {
    hidden: true //na zacatku chceme, aby dropdown menu bylo skryte
};

const cartReducer = (state = INITIAL_STATE, action) => { //nejdriv bude state initial, dokud nebude nejaky jiny
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //! zajisti zmenu hodnoty
            }
        default:
            return state;
    }
}

export default cartReducer;