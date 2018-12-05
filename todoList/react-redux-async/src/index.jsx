import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import App from './components/App'
import app from './reducers/list'
import rootSaga from './models/sagas'
import actions from './actions/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(app, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
// 请求初始数据
store.dispatch(actions.setTodoListAsync())

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)