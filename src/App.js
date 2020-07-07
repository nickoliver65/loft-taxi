import React from 'react';
import { Registration } from './registration/Registration';
import { Map } from './map/Map';
import { ProfileWithAuth } from './profile/Profile';
import './App.css';
import { PropTypes } from 'prop-types'
import { withAuth } from './AuthContext.jsx';
import { LoginWithAuth } from './login/Login.jsx';

export const ActionBtn = (props) => {
  return (<div>
    <button onClick={props.onClick}>
      {props.placeholder}
    </button>
  </div>)
}
 
const PAGES = {
  login: (props) => <LoginWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
  registration: (props) => <Registration {...props} />
}

class App extends React.Component {

  state = { currentPage: "login" }

  navigateTo = page => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page })
    }
    else {
      if (page == "registration") {
        this.setState({ currentPage: "registration" })
      }
      else {
        this.setState({ currentPage: "login" })
      }

    }
  }

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.navigateTo("login");
  };

  drawHeader = () => {
    return <div>
      <ActionBtn placeholder={"Выйти"} onClick={this.unauthenticate} />
      <ActionBtn placeholder={"Профиль"} onClick={() => this.navigateTo("profile")} />
      <ActionBtn placeholder={"Карта"} onClick={() => this.navigateTo("map")} />
    </div>
  }

  makePlaceholderElements = () => {

    if (this.state.currentPage == "map" || this.state.currentPage == "profile") {
      return <div>
        {this.drawHeader()}
      </div>
    }
  }

  render() {
    return <>
      <header>
        <main>
          {this.makePlaceholderElements()}
          <section>
            {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
          <div>actual state - {this.state.currentPage}</div>
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

export default withAuth(App);

//ex