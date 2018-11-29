const addTodo = text => {
    return {
        type: 'ADD_TODO',
        payload: {
            text,
        },
    }
}
const todoFinish = id => {
    return {
        type: 'TODO_FINISH',
        payload: {
            id,
        },
    }
}
const inputChange = text => {
    return {
        type: 'INPUT_CHANGE',
        payload: {
            text,
        },
    }
}

export default {
    addTodo,
    todoFinish,
    inputChange,
}
