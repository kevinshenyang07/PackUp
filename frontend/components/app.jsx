import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBar from './navbar/navbar';
import SplashContainer from  './splash/splash_container';
import ItemIndexContainer from './items/item_index_container';
import ItemShowContainer from './items/item_show_container';
import CurrentCartContainer from './cart_items/current_cart_container';
import CartIndexContainer from './carts/cart_index_container';
import Footer from './footer';

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
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <Route exact path="/items" component={ ItemIndexContainer } />
        <Route exact path="/items/:itemId" component={ ItemShowContainer } />
        <Route path="/search" component={ ItemIndexContainer} />
        <ProtectedRoute path="/cart" component={ CurrentCartContainer } />
        <ProtectedRoute path="/purchases" component={ CartIndexContainer } />
      </Switch>
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App;
