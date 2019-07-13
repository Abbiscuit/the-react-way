import React from 'react';
import CategoryName from '../categoryName/categoryName.component';
import Item from '../item/item.component';

import './productTable.style.scss';

const ProductTable = ({ itemlist, searchfield }) => {
  return (
    <div className="product-table">
      <table>
        <CategoryName />
        {itemlist.map(item => (
          <Item itemlist={item} key={item.id} />
        ))}
      </table>
    </div>
  );
};
export default ProductTable;
