import React from 'react';
import './App.css';
import Routes from './routes';
import NavbarHeader from './app/NavbarHeader';


function App() {
  return (
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
  );
}

export default App;
