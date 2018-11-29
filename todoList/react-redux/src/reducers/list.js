let count = 2
const defaultList = [
    {
        id: '1',
        name: 'TodoList from React',
        finish: true,
    }, {
        id: '2',
        name: 'TodoList from jQuery',
        finish: false,
    },
]

const list = (state = defaultList, action) => {
    switch (action.type) {
        case 'TODO_FINISH':
            return state.map(todo => ({
                ...todo,
                finish: todo.id === action.payload.id ? !todo.finish : todo.finish
            }))
        case 'ADD_TODO':
            return state.concat({
                id: ''.concat(++count),
                name: action.payload.text,
                finish: false,
            })
        default:
            return state
    }
}
export default list