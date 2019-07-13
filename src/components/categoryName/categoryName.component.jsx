import React, { Component, Fragment } from 'react';

class CategoryName extends Component {
  render() {
    return (
      <Fragment>
        <thead>
          <tr>
            <th>カテゴリー</th>
            <th>価格</th>
          </tr>
        </thead>
      </Fragment>
    );
  }
}

export default CategoryName;
