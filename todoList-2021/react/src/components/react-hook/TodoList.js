import React from 'react';
import Item from './Item';

const TodoList = (props) => {
  return (<ul className="todo-list">
    {props.list.map((todo) => (<Item
      key={todo.id}
      onClick={props.onClick}
      onDel={props.onDel}
      {...todo}
    />))}
  </ul>)
}
export default TodoList;