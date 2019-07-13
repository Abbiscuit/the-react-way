import React, { Component, Fragment } from 'react';

import './item.style.scss';

class Item extends Component {
  render() {
    return (
      <Fragment>
        <tbody>
          <tr key={this.props.itemlist.id}>
            <td>{this.props.itemlist.name}</td>
            <td>&yen; {this.props.itemlist.price}</td>
          </tr>
        </tbody>
      </Fragment>
    );
  }
}

export default Item;
