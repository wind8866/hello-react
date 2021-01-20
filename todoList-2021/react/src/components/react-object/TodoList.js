import React from 'react';

const TodoList = (props) => {
  return (<ul className={props.className}>
    {props.list.map((todo) => (<li
      className={todo.finish ? 'already' : ''}
      key={todo.id}
      onClick={() => props.finish(todo.id)}
    >
      {todo.id}: {todo.text}
    </li>))}
  </ul>)
}
export default TodoList;