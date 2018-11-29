import { combineReducers } from 'redux'
import list from './list'
import inputValue from './inputValue'

const app = combineReducers({
    list,
    inputValue
})
export default app