import { useReducer } from 'react';

import Context from './todoContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

let count = 0;

const reduce = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            value: action.value,
            id: count++,
            finish: false,
          }
        ]
      }
    case 'FINISH':
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id !== action.id) return todo;
          return {
            ...todo,
            finish: !todo.finish,
          }
        })
      }
    case 'FILTERTOGGLE':
      return {
        ...state,
        filter: !state.filter,
      }
    default:
      throw new Error();
  }
};
const App = () => {
  const initial = {
    todoList: [],
    filter: false,
  }
  return (<Context.Provider value={useReducer(reduce, initial)}>
    <AddTodo />
    <TodoList />
    <Filter />
  </Context.Provider>)
}

export default App;