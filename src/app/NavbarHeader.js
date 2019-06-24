import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavbarHeader extends Component {
  render () {
    return (
      <div>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/contact">Contact</Link></p>
        <p><Link to="/about">About</Link></p>
      </div>
    )
  }
}

export default NavbarHeader;
