import React from 'react';
import './App.css';
import Routes from './routes';
import NavbarHeader from './app/NavbarHeader';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
