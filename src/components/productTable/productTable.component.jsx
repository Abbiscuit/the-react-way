import React from 'react';
import CategoryName from '../categoryName/categoryName.component';
import Item from '../item/item.component';

import './productTable.style.scss';

const ProductTable = ({ filteredItems, isStock }) => {
  return (
    <div className="product-table">
      <table>
        <CategoryName />
        {filteredItems.map(filteredItem => (
          <Item
            filteredItem={filteredItem}
            key={filteredItem.id}
            isStock={isStock}
          />
        ))}
      </table>
    </div>
  );
};
export default ProductTable;
