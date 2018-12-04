import React from 'react'

const AddTodoBtn = ({ onAddTodo, change, value }) => {
    let input = null
    return (
        <header>
            <input type="text" ref={node => { input = node }}/>
            <button
                onClick={() => {
                    onAddTodo(input.value)
                    input.value = ''
                }}
            >添加</button>
        </header>
    )
}
export default AddTodoBtn