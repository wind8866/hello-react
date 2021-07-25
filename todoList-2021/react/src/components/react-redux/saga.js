import { put, call, all, takeEvery } from 'redux-saga/effects';

import { fetchAddTodo, fetchFinishTodo } from './api';
import actions from './actions';

function* addTodoAsync(action) {
  const res = yield fetchAddTodo(action)
  if (res.code === 200) {
    yield put(actions.add(res.data.value))
  }
}

function* addFinishAsync(action) {
  const res = yield fetchFinishTodo(action)
  if (res.code === 200) {
    yield put(actions.finish(res.data.id))
  }
}

export function* watchAddTodoAsync() {
  yield takeEvery('ADD_ASYNC', addTodoAsync)
}

export function* watchFinishAsync() {
  yield takeEvery('FINISH_ASYNC', addFinishAsync)
}

export default function* rootSaga(){
  yield all([
    watchAddTodoAsync(),
    watchFinishAsync(),
  ])
}