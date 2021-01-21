import React, { useEffect, useState, useRef } from 'react';
import TodoTopBar from './TodoTopBar';
import TodoList from './TodoList';
import './index.css';


const TodoApp = (props) => {

  const [input, inputChange] = useState('');
  const inputChangeHandle = (e) => inputChange(e.target.value);


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

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  })

  const add = () => {
    if (input.trim()) {
      todoListChange(todoList.concat([{
        text: input.trim(),
        id: todoList.length,
        finish: false,
      }]));
      inputChange('');

      inputRef.current.focus();
    } else {
      console.error('enter is empty')
    }
  }
  const inputKeypress = (e) => {
    if (e.charCode === 13) {
      add();
    }
  }
  
  return (
    <React.Fragment>
      <TodoTopBar
        ref={inputRef}
        value={input}
        onKeyPress={inputKeypress}
        onChange={inputChangeHandle}
        showAll={showAll}
        add={add}
        changeShow={changeShow}
      />
      <TodoList
        className={showAll ? 'show-all todo-list' : 'todo-list'}
        list={todoList}
        onClick={onfinishHandle}
      />
    </React.Fragment>
  )
}

export default TodoApp;