import React from 'react';

import './searchBar.style.scss';

const SearchBar = ({ isStock, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="商品検索..."
        onChange={onSearchChange}
      />
      <div className="check-stock">
        <input
          className="check-stock-box"
          type="checkbox"
          name="stock"
          id="stock"
          value={isStock}
        />

        <label htmlFor="stock"> 在庫品のみ表示</label>
      </div>
    </div>
  );
};

export default SearchBar;
