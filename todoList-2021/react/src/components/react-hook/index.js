import React, { useEffect, useState, useRef } from 'react';
import TodoTopBar from './TodoTopBar';
import TodoList from './TodoList';
import ViewAll from './store';
import api from '../../api/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import theme from './reducers/todo';

const store = createStore(theme);
const TodoApp = (props) => {

  const [showAll, showAllChange] = useState(true);
  const changeShow = () => showAllChange(!showAll);

  const [todoList, todoListChange] = useState([]);
  const [loading, loadingChange] = useState(false);
  useEffect(async function () {
    loadingChange(true);
    const resData = await api.queryList();
    loadingChange(false);
    todoListChange(resData.data);
  }, []);

  const onfinishHandle = async (id) => {
    loadingChange(true);
    const resData = await api.todoFinish({id});
    loadingChange(false);
    if (resData.code === 200) {
      const newTodoList = todoList.map((data) => {
        if (id === data.id) {
          return Object.assign({}, data, {finish: !data.finish})
        }
        return data;
      })
      todoListChange(newTodoList);
    }
  }
  const onDelHandle = async (id) => {
    loadingChange(true);
    const resData = await api.todoDel({id});
    loadingChange(false);
    if (resData.code === 200) {
      const newTodoList = todoList.filter(data => (id !== data.id))
      todoListChange(newTodoList);
    }
  }

  // 其实这里也可以放到TodoTopBar组件中
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const push = async (text) => {
    loadingChange(true);
    const resData = await api.addTodo({text});
    console.log(resData);
    loadingChange(false);
    if (resData.code === 200) {
      todoListChange(todoList.concat([resData.data]));
      inputRef.current.focus();
    }
  }
  
  return (
    <div>
      <Provider store={store}>
        <ViewAll.Provider value={showAll}>
          <TodoTopBar
            ref={inputRef}
            add={push}
            changeShow={changeShow}
          />
          <TodoList
            list={todoList}
            onClick={onfinishHandle}
            onDel={onDelHandle}
          />
          {loading ? 'loading...' : null}
        </ViewAll.Provider>
      </Provider>
    </div>
  )
}

export default TodoApp;