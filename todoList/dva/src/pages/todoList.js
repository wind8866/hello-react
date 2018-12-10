import React from 'react'
import { connect } from 'dva'

function TodoList({ dispatch, todoList }) {
  let input = null
  const onAddTodo = (text) => {
    dispatch({
      type: 'todoList/addTodoAsync',
      name: text
    })
  }
  const onTodoFinish = (id) => {
    dispatch({
      type: 'todoList/todoFinishAsync',
      id: id
    })
  }
  return (
    <div>
      <header>
        <input type="text" ref={node => { input = node }}/>
          <button
          onClick={() => {
            onAddTodo(input.value)
            input.value = ''
          }}
        >添加</button>
    </header>
    <main>
      <ul>
        {todoList.map(todo => (
            <li
                key={todo.id}
                onClick={() => {
                    onTodoFinish(todo.id)
                }}
                style={{
                    cursor: 'pointer',
                    color: todo.finish ? '#999' : '#333',
                    textDecoration: todo.finish ? 'line-through' : 'none',
                }}
            >
                {todo.name}
            </li>
        ))}
      </ul>
    </main>
    </div>
  );
}
function mapStateToProps(state) {
    return {
      ...state.todoList
    }
  }
export default connect(mapStateToProps)(TodoList)