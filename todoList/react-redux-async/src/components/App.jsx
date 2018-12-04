import React from 'react'
import TodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/VisibleAddTodo'

const App = () => (
    <main>
        <AddTodo/>
        <TodoList/>
    </main>
)
export default App