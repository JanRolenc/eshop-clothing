import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';//App musime zmenit na class, abychom mohli hlidat state prihlaseni uzivatele

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  //abychom nezustali porad prihleseni, musime zavest metody pro odpojeni od firebase
  unsubscribeFromAuth = null;

  //firebase pomoci auth.onAuthStateChanged nam potvrdi prihlaseni uzivatele
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });//toto po zalozeni firestore nasledne menime na:
      // createUserProfileDocument(userAuth); //v dalsi fazi toto menime, chceme usera ulozit do state
      // console.log(user) //  ...v consoli mohu videt dulezita data usera jako displayName a email
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);//toto je ale jen reference
        //potrebujeme ziskat data:
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()//metoda snapShot.data() ziska vsechny atributy jen ne id, to musime pomoci metody snapShot.id
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
