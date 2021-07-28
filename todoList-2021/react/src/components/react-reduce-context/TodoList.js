import { useContext } from 'react';
import actions from './actions';
import Context from './todoContext';

const Todo = ({ todo, onClick }) => {
  return (<li onClick={onClick}>
    {todo.finish ? '✅ ' : ' '} {todo.value}
  </li>);
}

const TodoList = () => {
  const [{ filter, todoList }, dispatch] = useContext(Context);

  const onClick = (id) => {
    dispatch(actions.finish(id));
  }
  return (
    <ul>
      {todoList
        .filter(todo => filter ? !todo.finish : true)
        .map(todo => (<Todo
          todo={todo}
          onClick={() => onClick(todo.id)}
          key={todo.id}
        />))
      }
    </ul>
  )  
}

export default TodoList;
