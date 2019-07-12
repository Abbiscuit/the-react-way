import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader.component';
import SearchBar from './components/searchBar/searchBar.component';
import ProductTable from './components/productTable/productTable.component';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default App;
