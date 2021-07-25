import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSaga from 'redux-saga';

import reducer from './reducers';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import mySata from './sagas';

const saga = createSaga();

const store = createStore(reducer, applyMiddleware(saga));

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

saga.run(mySata);

export default App;