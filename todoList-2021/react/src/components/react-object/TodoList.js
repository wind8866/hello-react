import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  return (<ul className={props.className}>
    {props.list.map((todo) => (<li
      className={todo.finish ? 'already' : ''}
      key={todo.id}
      onClick={() => props.onClick(todo.id)}
    >
      {todo.id}: {todo.text}
    </li>))}
  </ul>)
}

TodoList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
  finish: PropTypes.func,
};

TodoList.defaultProps = {
  className: 'list',
  list: [],
  onClick: id => console.log(id),
};

export default TodoList;