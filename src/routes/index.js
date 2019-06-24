import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import NavbarHeader from '../app/NavbarHeader';

import Home from '.././pages/Home';
import Contact from '.././pages/Contact';
import About from '.././pages/About';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavbarHeader />
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
