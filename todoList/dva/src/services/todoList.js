import request from '../utils/request'

export function fetchTodoList() {
  return request('/api/list')
}
export function changeTodo({ id }) {
  return request(`/api/change?id=${id}`)
}
export function addTodo({ name }) {
  return request(`/api/add?name=${name}`)
}
