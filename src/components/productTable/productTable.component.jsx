import React, { Component } from 'react';
import CategoryName from '../categoryName/categoryName.component';
import Item from '../item/item.component';

import './productTable.style.scss';

class ProductTable extends Component {
  render() {
    return (
      <div className="product-table">
        <table>
          <CategoryName />
          {this.props.itemlist.map(item => (
            <Item itemlist={item} key={item.id} />
          ))}
        </table>
      </div>
    );
  }
}
export default ProductTable;
