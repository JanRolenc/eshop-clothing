import { createSelector } from 'reselect';

//toto je priklad standardniho selectoru, kdy veme cely state a vrati nejakou jeho cast, vetsinou vrstvu nizsi
//tzv. INPUT selector
const selectCart = state => state.cart;

//pak je tzv. OUTPUT selector, ktery uz vyuziva createSelector metodu a i nejaky input selector a jde nize
//vyuziva 2 argumenty: 
//- collection/array vstupnich prvku
//- druhym je funkce, ktera vraci nejakou vystupni hodnotu
//tento selector uz se nazyva memoize selector, protoze pouziva createSelector 
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

//ted vytvorime selector, ktery nahradi fci v cart-icon mapStateToProps na pocitani items
//musim pak toto import do cart-icon
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0) //jako vychozi hodnota je 0
)