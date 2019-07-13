import React, { Fragment } from 'react';

import './item.style.scss';

const Item = ({ filteredItem }) => {
  return (
    <Fragment>
      <tbody>
        <tr key={filteredItem.id}>
          <td>{filteredItem.name}</td>
          <td>&yen; {filteredItem.price}</td>
        </tr>
      </tbody>
    </Fragment>
  );
};

export default Item;
