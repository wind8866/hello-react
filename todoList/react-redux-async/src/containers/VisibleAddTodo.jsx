import { connect } from 'react-redux'
import actions from '../actions/index'
import AddTodo from '../components/AddTodo'

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
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