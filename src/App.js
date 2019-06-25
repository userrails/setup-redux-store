import React from 'react';
import './App.css';
import Routes from './routes';
import NavbarHeader from './app/NavbarHeader';
import {ConnectedRouter} from 'connected-react-router';


function App(props) {
  return (
    <ConnectedRouter history={props.history}>
    <div className="App">
      <div>
        <NavbarHeader />
      </div>
      <header className="App-header">
        <p>Welcome</p>
      <div>
          <Routes />
      </div>
      </header>
    </div>
    </ConnectedRouter>
  );
}

export default App;
