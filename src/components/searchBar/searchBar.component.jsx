import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="商品検索" />
        <div className="check-stock">
          <input type="checkbox" name="stock" id="stock" />
          <label htmlFor="stock">在庫品のみ表示</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
