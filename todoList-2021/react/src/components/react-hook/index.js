import React, { useEffect, useState, useRef } from 'react';
import TodoTopBar from './TodoTopBar';
import TodoList from './TodoList';
import ViewAll from './store';


const TodoApp = (props) => {

  const [showAll, showAllChange] = useState(true);
  const changeShow = () => showAllChange(!showAll);

  const [todoList, todoListChange] = useState([]);
  const onfinishHandle = (id) => {
    const newTodoList = todoList.map((data) => {
      if (id === data.id) {
        return Object.assign({}, data, {finish: !data.finish})
      }
      return data;
    })
    todoListChange(newTodoList);
  }
  const onDelHandle = (id) => {
    const newTodoList = todoList.filter(data => (id !== data.id))
    todoListChange(newTodoList);
  }

  // 其实这里也可以放到TodoTopBar组件中
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const push = (text) => {
    let id = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;
    todoListChange(todoList.concat([{
      text,
      id,
      finish: false,
    }]));

    inputRef.current.focus();
  }
  
  
  return (
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
    </ViewAll.Provider>
  )
}

export default TodoApp;