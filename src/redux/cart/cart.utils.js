
//fce s 2 parametry - vsechny items co jsou uz v seznamu pro nakup (v kosiku) a nova pro pridani
//chceme projit vsechny polozky v seznamu a zjistit zda nova tam uz je
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //projde pole a hleda stejnou
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    //pokud stejna polozka je, udelej nove pole a u polozky se stejnym id navys mnozstvi o 1
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                cartItem
        )
    }
    //pokud item se stejnym id v kosiku neni, tak vrat pole s cartItems a object s nove pridanou polozkou a mnozstvim 1
    //quantity je poprve pridano uz u prvni polozky, kdy logicky neprobehne if blok
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];//asi slouceni pomoci spread operatoru
}