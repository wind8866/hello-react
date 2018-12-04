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

export default {
    addTodo,
    todoFinish,
}
