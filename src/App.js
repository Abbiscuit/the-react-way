import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader.component';
import SearchBar from './components/searchBar/searchBar.component';
import ProductTable from './components/productTable/productTable.component';

import { itemlist } from './itemlist';

class App extends Component {
  state = {
    searchfield: '',
    isStock: false
  };

  onSearchChange = e => {
    console.log(e.target.value);
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredItems = itemlist.filter(filteredItem => {
      return filteredItem.name.includes(this.state.searchfield);
    });

    return (
      <div>
        <AppHeader />
        <SearchBar
          onSearchChange={this.onSearchChange}
          searchfield={this.state.searchfield}
          isStock={this.state.isStock}
        />
        <ProductTable
          itemlist={filteredItems}
          searchfield={this.state.searchfield}
        />
      </div>
    );
  }
}

export default App;
