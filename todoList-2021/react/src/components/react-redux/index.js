import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

const store = createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState());
// })

const App = () => {
  return (<Provider store={store}>
    <AddTodo />
    <TodoList />
    <Filter />
  </Provider>)
}

export default App;