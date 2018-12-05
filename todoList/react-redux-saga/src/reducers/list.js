const app = (state = [], action) => {
    switch (action.type) {
        case 'SET_TODOLIST':
            return action.payload
        case 'TODO_FINISH':
            return state.map(todo => ({
                ...todo,
                finish: todo.id === action.payload.id ? !todo.finish : todo.finish
            }))
        case 'ADD_TODO':
            return state.concat(action.payload)
        default:
            return state
    }
}
export default app