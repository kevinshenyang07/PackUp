import React from 'react';
import { Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBar from './navbar/navbar';
import SplashContainer from  './splash/splash_container';
import ItemIndexContainer from './items/item_index_container';
// import ItemShowContainer from './items/item_show_container';
// and all containers that need route info

import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#F56400',
    accent1Color: '#DA552F',

    textColor: '#797979',
  },
});


const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <NavBar />
      <main>
        <Route exact path="/" component={SplashContainer} />
        <Route path="/items" component={ ItemIndexContainer } />
      </main>
    </div>
  </MuiThemeProvider>
);

export default App;
