import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Wishlist from './Wishlist';
import Shop from './Shop';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Shop classname="shop" />
          <br />
          <Wishlist />
          {/*<Route path="/new/" component={AddListForm} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
