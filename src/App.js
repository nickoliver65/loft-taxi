import React from 'react';
import { Login } from './Login';
import { Registration } from './Registration';
import { Map } from './Map';
import { Profile } from './Profile';
import './App.css';

export const ActionBtn = (props) =>
{
  return (<div>
    <button onClick = {props.onClick}>
      {props.placeholder}
      </button>
  </div>)
}

class App extends React.Component {

  state = { currentPage: "login" }

  renderPage = (page) =>
  {
    if(page == "login")
    {
      return <Login navigateTo = {this.navigateTo}  />
    }
    else if(page == "registration")
    {
      return <Registration navigateTo = {this.navigateTo}  />
    }
    else if(page == "map")
    {
      return <Map navigateTo = {this.navigateTo}  />
    }
    else if(page == "profile")
    {
      return <Profile navigateTo = {this.navigateTo}  />
    }
  }

  navigateTo = page => {
    this.setState({ currentPage: page })
  }

  drawHeader = () =>
  {
    return <div>
      <ActionBtn placeholder = {"Выйти"} onClick = {()=>this.navigateTo("login")}/>
      <ActionBtn placeholder = {"Профиль"} onClick = {()=>this.navigateTo("profile")}/>
      <ActionBtn placeholder = {"Карта"} onClick = {()=>this.navigateTo("map")}/>
    </div>
  }

  makePlaceholderElements = () => {
    
    if(this.state.currentPage == "map" || this.state.currentPage == "profile")
    {
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
            {
              this.renderPage(this.state.currentPage)
            }
          </section>
          <div>actual state - {this.state.currentPage}</div>
        </main>
      </header>
    </>;
  }
}

export default App;

//ex