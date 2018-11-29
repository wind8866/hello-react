import { connect } from 'react-redux'
import actions from '../actions/index'
import AddTodo from '../components/AddTodo'

const mapStateToProps = state => {
    return {
        inputValue: state.inputValue
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChangeValue: text => {
            dispatch(actions.inputChange(text))
        },
        onAddTodo: text => {
            dispatch(actions.addTodo(text))
        }
    }
}

const VisibleAddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)
export default VisibleAddTodo