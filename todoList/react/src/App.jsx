import React from 'react'
import TodoList from './TodoList'

class AppList extends React.Component {
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
    render() {
        return (
            <>
                <TodoList
                    list={this.state.list}
                    onTodoFinish={this.onTodoFinish}
                />
            </>
        )
    }
}
export default AppList