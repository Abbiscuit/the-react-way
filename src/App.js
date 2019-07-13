import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader.component';
import SearchBar from './components/searchBar/searchBar.component';
import ProductTable from './components/productTable/productTable.component';

import { itemlist } from './itemlist';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <SearchBar />
        <ProductTable itemlist={itemlist} />
      </div>
    );
  }
}

export default App;
