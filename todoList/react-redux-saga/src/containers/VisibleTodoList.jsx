import { connect } from 'react-redux'
import actions from '../actions/index'
import TodoList from '../components/TodoList'
import { call, put } from 'redux-saga/effects'

const mapStateToProps = state => {
    return {
        list: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoFinish: id => {
            dispatch(actions.todoFinishAsync(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
export default VisibleTodoList