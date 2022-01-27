
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }//po zavedeni redux uz neni potreba constructor a nasledne menime i setState v componentDidMount

  //abychom nezustali porad prihleseni, musime zavest metody pro odpojeni od firebase
  unsubscribeFromAuth = null;

  //firebase pomoci auth.onAuthStateChanged nam potvrdi prihlaseni uzivatele
  componentDidMount() {
    // console.log(this.state);
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });//toto po zalozeni firestore nasledne menime na:
      // createUserProfileDocument(userAuth); //v dalsi fazi toto menime, chceme usera ulozit do state
      // console.log(user) //  ...v consoli mohu videt dulezita data usera jako displayName a email
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);//toto je ale jen reference
        //potrebujeme ziskat data:
        userRef.onSnapshot(snapShot => {
          //   this.setState({
          //     currentUser: {
          //       id: snapShot.id,
          //       ...snapShot.data()//metoda snapShot.data() ziska vsechny atributy jen ne id, to musime pomoci metody snapShot.id
          //     }
          //   });
          //po zavedeni redux zmena na:
          // this.props.setCurrentUser({//descructuring pod componentDidMount, pak mohu takto:
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // this.setState({ currentUser: userAuth });
      // this.props.setCurrentUser({ currentUser: userAuth });//descructuring pod componentDidMount, pak mohu takto:
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser} /> po zavedeni redux uz props currentUser u header nedavame*/}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {/* <Route path='/signin' component={SignInAndSignUpPage} /> po zavedeni Redirect menime na: */}
          <Route exact path='/signin' render=
            {
              () => this.props.currentUser ?
                (
                  <Redirect to='/' />
                )
                :
                (
                  <SignInAndSignUpPage />
                )
            }
          />
        </Switch>
      </div>
    );
  }
}

//toto zavadime spolecne s Redirect - nechceme, aby prihlaseny uzivatel mel stale pristup do signin routy
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// export default App;//po zavedeni redux toto nahrazujeme viz nize:
export default connect(
  // null,//misto null dame po zavedeni Redirect mapStateToProps
  mapStateToProps,
  mapDispatchToProps)
  (App);//jak toto zavedeme, vymazeme constructor vyse
