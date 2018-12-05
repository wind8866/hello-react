import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'

import actions from '../actions/index'

export function* questTodoList() {
    const params = {}
    const response = yield axios.get('/api/list', { params }).then((response) => {
        return response
    }).catch(err => {
        return err
    })
    if(response.data.code === 200) {
        const resData = response.data.data
        yield put(actions.setTodoList(resData))
    } else {
        console.error(response.data.code)
    }
}

export function* addTodoAsync({ type, payload }) {
    const params = {
        name: payload.text
    }
    const response = yield axios.get('/api/add', { params }).then((response) => {
        return response
    }).catch(err => {
        return err
    })
    if(response.data.code === 200) {
        const resData = response.data.data
        yield put(actions.addTodo(resData))
    } else {
        console.error(response.data.code)
    }
}

export function* todoFinishAsync({ type, payload }) {
    const params = {
        id: payload.id
    }
    const response = yield axios.get('/api/change', { params }).then((response) => {
        return response
    }).catch(err => {
        return err
    })
    if(response.data.code === 200) {
        yield put(actions.todoFinish(payload.id))
    } else {
        console.error(response.data.code)
    }
}

// 监听并拦截 SET_TODOLIST_ASYNC action，执行异步方法 questTodoList
export function* watchSetTodoListAsync() {
    yield takeEvery('SET_TODOLIST_ASYNC', questTodoList)
}
// 监听并拦截 ADD_TODO_ASYNC action，执行异步方法 addTodoAsync
export function* watchAddTodoAsync() {
    yield takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}
// 监听并拦截 ADD_TODO_ASYNC action，执行异步方法 todoFinishAsync
export function* watchTodoFinish() {
    yield takeEvery('TODO_FINISH_ASYNC', todoFinishAsync)
}

export default function* rootSaga() {
    yield all([
        watchSetTodoListAsync(),
        watchTodoFinish(),
        watchAddTodoAsync()
    ])
}