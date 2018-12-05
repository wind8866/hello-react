import React from 'react'

const AddTodo = ({ onAddTodo, }) => {
    let input = null
    return (
        <header>
            <input
                type="text"
                ref={node => { input = node }}
            />
            <button
                onClick={() => {
                    onAddTodo(input.value)
                    input.value = ''
                }}
            >添加</button>
        </header>
    )
}
export default AddTodo