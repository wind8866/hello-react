import React, { useEffect, useState, useRef } from 'react';
import TodoTopBar from './TodoTopBar';
import TodoList from './TodoList';
import ViewAll from './store';


const TodoApp = (props) => {

  const [showAll, showAllChange] = useState(true);
  const changeShow = () => showAllChange(!showAll);

  const [todoList, todoListChange] = useState([]);
  const onfinishHandle = (index) => {
    const newTodoList = todoList.map((data, i) => {
      if (index === i) {
        return Object.assign({}, data, {finish: !data.finish})
      }
      return data;
    })
    todoListChange(newTodoList);
  }

  // 其实这里也可以放到TodoTopBar组件中
  const inputRef = useRef();
  useEffect(() => {
    // TODO: 改为只在第一次获取焦点
    inputRef.current.focus();
  })

  const push = (text) => {
    todoListChange(todoList.concat([{
      text,
      id: todoList.length,
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
      />
    </ViewAll.Provider>
  )
}

export default TodoApp;