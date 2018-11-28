import React from 'react'

const TodoList = ({ list, onTodoFinish}) => (
    <ul>
        {list.map(todo => (
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
)
export default TodoList