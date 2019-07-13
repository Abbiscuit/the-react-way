import React, { Component } from 'react';
import AppHeader from '../components/appHeader/appHeader.component';
import SearchBar from '../components/searchBar/searchBar.component';
import ProductTable from '../components/productTable/productTable.component';

import { itemlist } from '../itemlist';

class App extends Component {
  state = {
    searchfield: '',
    isStock: []
  };

  onSearchChange = e => {
    console.log(e.target.value);
    this.setState({ searchfield: e.target.value });
  };

  onCheckbox = e => {
    const { isStock } = this.state;
    console.log(e.target.value);
    this.setState({
      isStock: !isStock
    });
  };

  render() {
    const { searchfield, isStock } = this.state;
    const filteredItems = itemlist.filter(filteredItem => {
      return filteredItem.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    return (
      <div>
        <AppHeader />
        <SearchBar
          onSearchChange={this.onSearchChange}
          searchfield={searchfield}
          onCheckbox={this.onCheckbox}
        />
        <ProductTable filteredItems={filteredItems} isStock={isStock} />
      </div>
    );
  }
}

export default App;
