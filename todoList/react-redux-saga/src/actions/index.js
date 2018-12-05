const setTodoList = todoList => {
    return {
        type: 'SET_TODOLIST',
        payload: todoList
    }
}
const setTodoListAsync = () => {
    return {
        type: 'SET_TODOLIST_ASYNC',
    }
}
const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}
const addTodoAsync = text => {
    return {
        type: 'ADD_TODO_ASYNC',
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
const todoFinishAsync = id => {
    return {
        type: 'TODO_FINISH_ASYNC',
        payload: {
            id,
        },
    }
}

export default {
    setTodoList,
    setTodoListAsync,
    addTodo,
    addTodoAsync,
    todoFinish,
    todoFinishAsync,
}
