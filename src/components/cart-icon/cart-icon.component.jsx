import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; //nutne k vytvoreni nove komponenty Logo
import './cart-icon.style.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';//po zavedeni cart.selectors; nasledne pak upravim mapStateToProps


// const CartIcon = () => {//po zavedeni mapDispatchToProps nize toto tady upravime
// const CartIcon = ({ toggleCartHidden }) => {//a nasledne doplnime onClick do div
//po zavedeni mapStateToProps muzeme doplnit itemCount
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);


//toto zase vlozime po zavedeni connect na cart actions
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//fce pro soucet vybranych polozek v kosiku; itemCount pak muze dat jako parametr do const CartIcon = ({ toggleCartHidden, itemCount })
//metoda nize s pomoci reduce je tzv. SELECTOR, jelikoz jsme si nacetli cely state se vsemi parametry, ale nascitali jen cast 
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)//jako vychozi hodnota je 0
// });
//pouziti selectoru timto zpusobem ale neni nejlepsi, protoze zpusobi znovunacteni vseho pri jakemkoli znovuuziti state i treba v uplne
//jine komponente, napr. kdyz se nekdo prihlasi, znovu se nacte kosik, znovu se spusti mapStateToProps
//proto je vhodne zavest knihovni RESELECT a selectory presunout do zvlast souboru cart.selectors; toto zpusobi, ze pokud hodnoty
//poslane ze state jsou nezmenene a tedy ani vystup ze selectoru se nezmeni, tak selector posle hodnotu starou, kterou ma jiz ulozenu
//tim nedojde k znovunacitani ~ rerendering
//a v tomto pripade to take zpusobi


//po zavedeni cart.selector mapStateToProps upravime:
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

// export default CartIcon; //toto musime upravit po zavedeni connect na cart actions
//po zavedeni itemCount doplnil mapStateToProps a vymazal null
// export default connect(null,
export default connect(
    mapStateToProps,
    mapDispatchToProps)(CartIcon);//!!! kdyz jsem dal prvni mapDispatchToProps a pak mapStateToProps, tak se nenacetla hlavni strana appky!!!