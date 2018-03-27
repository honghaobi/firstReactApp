import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  render() {
    return (
      //can only return one div/element.
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
}

export default TodoItem;
