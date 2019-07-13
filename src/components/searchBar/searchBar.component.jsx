import React from 'react';

import './searchBar.style.scss';

const SearchBar = ({ onCheckbox, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="商品検索..."
        onChange={onSearchChange}
      />
      {/* <div className="check-stock">
        <input
          className="check-stock-box"
          type="checkbox"
          name="stock"
          id="stock"
          onChange={onCheckbox}
        />

        <label htmlFor="stock"> 在庫品のみ表示</label>
      </div> */}
    </div>
  );
};

export default SearchBar;
