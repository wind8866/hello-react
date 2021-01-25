import axios from 'axios';

const domain = 'http://127.0.0.1:2333';

const request = (path, req = {}) => {
  console.log(req)
  return axios.get(`${domain}${path}`, {params: req}).then(res => {
    if (res.status === 200) {
      if (res.data.code === 200) {
        return res.data;
      } else {
        console.error(new Error(res.code, res.msg));
        return res.data;
      }
    } else {
      console.error(new Error(res.status, res.statusText));
    }
  }).catch(err => {
    // then 中抛出错误可直接在catch中捕获
    console.error(new Error(err));
  })
}


const queryList = () => request('/api/list');
const addTodo = (req) => request('/api/add', req);
const todoFinish = (req) => request('/api/change', req);
const todoDel = (req) => request('/api/del', req);

export default {
  queryList,
  addTodo,
  todoFinish,
  todoDel,
}
export {
  queryList,
  addTodo,
  todoFinish,
  todoDel,
}
