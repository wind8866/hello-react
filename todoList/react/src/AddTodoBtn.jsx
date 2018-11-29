import React from 'react'

const AddTodoBtn = ({ onAddTodo, change, value }) => (
    <ul>
        <input
            type="text"
            value={value}
            onChange={event => change(event.target.value)}
        />
        <button onClick={onAddTodo}>添加</button>
    </ul>
)
export default AddTodoBtn