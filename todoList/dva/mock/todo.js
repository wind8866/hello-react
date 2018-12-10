const todoList = {
    data: [
        {
            id: '1',
            name: 'TodoList from React',
            finish: true,
        }, {
            id: '2',
            name: 'TodoList from jQuery',
            finish: false,
        },
    ],
    code: 200,
}
const addTodo = {
    data: {
        id: '3',
        name: 'TodoList from Dva',
        finish: false,
    },
    code: 200
}
const changeTodo = {
    data: {},
    code: 200,
}

export default {
    todoList,
    addTodo,
    changeTodo,
}
