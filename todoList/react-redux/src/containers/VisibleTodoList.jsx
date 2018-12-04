import { connect } from 'react-redux'
import actions from '../actions/index'
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
    return {
        list: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoFinish: id => {
            dispatch(actions.todoFinish(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
export default VisibleTodoList