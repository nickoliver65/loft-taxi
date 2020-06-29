import React from 'react';
import { Login } from './Login';
import { Registration } from './Registration';
import { Map } from './Map';
import { Profile } from './Profile';
import './App.css';

const PAGES = {
  login: <Login />,
  registration: <Registration />,
  map: <Map />,
  profile: <Profile />
}

class App extends React.Component {

  state = { currentPage: "login" }

  navigateTo = page => {
    this.setState({ currentPage: page })
  }

  makeActualBtn = (type,placeholder) => {
    return <div>
      <button
        onClick={() => {
          this.navigateTo(type)
        }}
      >
        {placeholder}
        </button>
    </div>
  }

  drawHeader = () =>
  {
    return <div>
      {this.makeActualBtn("login","Выйти")}
      {this.makeActualBtn("profile","Профиль")}
      {this.makeActualBtn("map","Карта")}
    </div>
  }

  makeListOfBtn = () => {
    
    let actual_type = this.state.currentPage;
    
    switch (actual_type) {
      case "login":
        {
          return <div>
            {this.makeActualBtn("map","Вход")}
            {this.makeActualBtn("registration","Зарегистрируйтесь")}
          </div>
        }
        break; 
        case "registration":
          {
            return <div>
              {this.makeActualBtn("map","Вход")}
            </div>
          }
          break;        
      default:
        return false;
    }  

  }
  makePlaceholderElements = () => {
    
    let actual_type = this.state.currentPage;
    
    if(actual_type == "map" || actual_type == "profile")
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
              PAGES[this.state.currentPage]
            }
          </section>
          {this.makeListOfBtn()}
          <div>actual state - {this.state.currentPage}</div>
        </main>
      </header>
    </>;
  }
}

export default App;

//ex