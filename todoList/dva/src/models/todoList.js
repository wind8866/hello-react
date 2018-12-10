import { 
  fetchTodoList,
  changeTodo,
  addTodo,
} from '../services/todoList'

export default {
  namespace: 'todoList',
  // 状态 state
  state: {
    todoList: [],
  },
  // 更新 state
  reducers: {
    setTodoList(state, { payload: { data } }) {
      return {
          todoList: data
      }
    },
    todoFinish(state, { payload: { id } }) {
      const newState = state.todoList.map(todo => {
        if(id === todo.id) {
          return {
            ...todo,
            finish: !todo.finish
          }
        } else {
          return todo
        }
      })
      return {
          todoList: newState
      }
    },
    addTodo(state, { payload: { data } }) {
      return {
          todoList: [
            ...state.todoList,
            data
          ]
      }
    },
  },
  // 异步事件，回调更新 state 方法
  effects: {
    *setTodoListAsync({ }, { call, put }) {
      const allData = yield call(fetchTodoList, { })
      const resData = allData.data

      if(resData.code === 200){
        yield put({
          type: 'setTodoList',
          payload: {
            data: resData.data
          },
        })
      } else {
        console.error(resData.code)
      }
    },
    *todoFinishAsync({ id }, { call, put }) {
      const allData = yield call(changeTodo, { id })
      const resData = allData.data
      
      if(resData.code === 200){
        yield put({
          type: 'todoFinish',
          payload: {
            id
          },
        })
      } else {
        console.error(resData.code)
      }
    },
    *addTodoAsync({ name }, { call, put }) {
      const allData = yield call(addTodo, { name })
      const resData = allData.data

      if(resData.code === 200){
        yield put({
          type: 'addTodo',
          payload: {
            data: resData.data
          },
        })
      } else {
        console.error(resData.code)
      }
    },
  },
  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query, }) => {
        if (pathname === '/todoList') {
          dispatch({
            type: 'setTodoListAsync'
          })
        }
      })
    },
  },
}
