import { useSelector, useDispatch } from "react-redux";
import actions from './actions';

const Todo = ({ todo, onClick }) => {
  return (<li onClick={onClick}>
    {todo.finish ? '✅ ' : ' '} {todo.value}
  </li>);
}

const TodoList = () => {
  const filter = useSelector(state => state.filter);
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();

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
