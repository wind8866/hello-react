import React from 'react';
import TodoTopBar from './TodoTopBar';
import TodoList from './TodoList';
import './index.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      showAll: true,
      todoList: [],
    }
    this.inputRef = React.createRef();
  }
  add = () => {
    if (this.state.input.trim()) {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            text: this.state.input.trim(),
            id: this.state.todoList.length,
            finish: false,
          }
        ],
        input: '',
      })
      this.inputRef.current.focus();
    } else {
      console.error('enter is empty')
    }
  }
  finish = (index) => {
    // 这种数据应该如何修改? 参见react-hook内的代码
    this.state.todoList[index]['finish'] = !this.state.todoList[index]['finish'];
    this.setState({
      todoList: this.state.todoList,
    });
  }
  changeShow = () => {
    this.setState({
      showAll: !this.state.showAll,
    });
  }
  inputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  inputKeypress = (e) => {
    if (e.charCode === 13) {
      this.add();
    }
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const {
      input,
      showAll,
      todoList,
    } = this.state;
    const {
      inputKeypress,
      inputChange,
      inputRef,
      add,
      changeShow,
      finish,
    } = this;
    return (<div>
      <TodoTopBar
        ref={inputRef}
        value={input}
        onKeyPress={inputKeypress}
        onChange={inputChange}
        showAll={showAll}
        add={add}
        changeShow={changeShow}
      />
      <TodoList
        className={showAll ? 'show-all todo-list' : 'todo-list'}
        list={todoList}
        finish={finish}
      />
    </div>)
  }
}

export default TodoApp;