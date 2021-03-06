import React from 'react';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Sign from './pages/Sign/Sign';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import {setCurrentUser} from './redux/actions/userAction';
import './App.scss';

class App extends React.Component {
  

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/sign" render={() => this.props.currentUser ? (<Redirect to="/" />) : <Sign/>} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user}) => {
  console.log(user);
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
