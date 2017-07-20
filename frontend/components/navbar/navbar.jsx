import React from 'react';
import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';

import { Link } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';

const NavBar = () => (
  <AppBar
    title={<Link to="/" className="title">PackUp</Link>}
    iconElementLeft={<img className="logo"
      src="http://res.cloudinary.com/kevinsy07
        /image/upload/v1500527172/logo_tfhzhd.png" />}
    iconElementRight={<SessionFormContainer />}
    className="navbar"
  />
);

export default NavBar;