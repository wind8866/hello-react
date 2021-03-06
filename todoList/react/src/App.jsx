import React from 'react'
import TodoList from './TodoList'
import AddTodoBtn from './AddTodoBtn'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
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
        }
        this.count = 2
    }
    onTodoFinish = (id) => {
        const list = this.state.list.map((todo) => {
            return {
                ...todo,
                finish: todo.id === id ? !todo.finish : todo.finish
            }
        })
        console.log(list, id)
        this.setState({
            list: list
        })
    }
    onInputChange = (test) => {
        this.setState({
            inputValue: test
        })
    }
    onAddTodo = (value) => {
        this.setState({
            list: this.state.list.concat({
                id: ''.concat(++this.count),
                name: value,
                finish: false,
            })
        })
    }
    render() {
        return (
            <>
                <AddTodoBtn
                    onAddTodo={this.onAddTodo}
                    change={this.onInputChange}
                />
                <TodoList
                    list={this.state.list}
                    onTodoFinish={this.onTodoFinish}
                />
            </>
        )
    }
}
export default App