import React from 'react'

const AddTodo = ({ inputValue, onChangeValue, onAddTodo, }) => (
    <header>
        <input
            type="text"
            value={inputValue}
            onChange={event => onChangeValue(event.target.value)}
        />
        <button onClick={() => onAddTodo(inputValue)}>添加</button>
    </header>
)
export default AddTodo