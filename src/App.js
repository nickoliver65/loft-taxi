import React from 'react';
import { Registration } from './registration/Registration';
import { Map } from './map/Map';
import { ProfileWithConnect } from './profile/Profile';
import './App.css';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import { LoginWithAuth } from './login/Login.jsx';
import { Link, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './privateRoute'

class App extends React.Component {

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return <>
      <header>
        <main>
          <section>
            <Switch>
              <Route exact path='/' component={LoginWithAuth} />
              <PrivateRoute path='/map' component={Map} />
              <PrivateRoute path='/profile' component={ProfileWithConnect} />
              <Route path='/registration' component={Registration} />
            </Switch>
          </section>
        </main>
      </header>
    </>;
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn })
)(App);
