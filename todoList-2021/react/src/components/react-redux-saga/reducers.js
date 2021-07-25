import { combineReducers } from 'redux';

let count = 0;
function todoList (todos = [], action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...todos,
        {
          value: action.value,
          id: count++,
          finish: false,
        }
      ]
    case 'FINISH':
      return todos.map(todo => {
        if (todo.id !== action.id) return todo;
        return {
          ...todo,
          finish: !todo.finish,
        }
      })
    default:
      return todos;
  }
}

function filter (status = false, action) {
  switch (action.type) {
    case 'FILTERTOGGLE':
      return !status;
    default:
      return status;
  }
}
const reducer = combineReducers({
  todoList,
  filter,
});

export default reducer;
