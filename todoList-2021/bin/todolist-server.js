// 参考：https://chuyao.github.io/2017/07/11/simple-api-server-with-nodejs/

const express = require('express')
const app = express()

// 初始数据
let todoList = [
    {
        id: '1',
        name: 'TodoList from React',
        finish: true,
    }, {
        id: '2',
        name: 'TodoList from jQuery',
        finish: false,
    },
]
let count = 2


const formatRespond = ({ data = {}, code = 200 }) => {
    return JSON.stringify({
        code: code,
        data: data
    })
}

// 请求 todoList 接口
app.get('/api/list', (req, res) => {
    res.send(formatRespond({ data: todoList }))
})

// 添加 todo 接口
// name: String
app.get('/api/add', function(req, res){
    // console.log(req, req.query)
    if(req.query.name != null) {
        const todo = {
            id: ''.concat(++count),
            name: req.query.name,
            finish: false,
        }
        todoList.push(todo)
        console.log('请求成功', req.query)
        res.send(formatRespond({ data: todo }))
    } else {
        console.error('请求失败', req.query)
        res.send(formatRespond({ code: 501 }))
    }
})

// changeFinish 接口
// id: String
app.get('/api/change', function(req, res){
    if(req.query.id != null) {
        todoList = todoList.map(todo => {
            if(req.query.id === todo.id){
                const newTodo = {
                    ...todo,
                    finish: !todo.finish
                }
                console.log('修改成功', newTodo)
                return newTodo
            }
            return todo
        })
        res.send(formatRespond({ code: 200 }))
    } else {
        res.send(formatRespond({ code: 501 }))
    }
});

// delTodo 接口
// id: String
app.get('/api/del', function(req, res){
    if(req.query.id != null) {
        todoList = todoList.filter(todo => (req.query.id !== todo.id));
        res.send(formatRespond({ code: 200 }))
    } else {
        res.send(formatRespond({ code: 501 }))
    }
});

// 启动服务
const port = 2333
app.listen(port, function(){
  console.log(`启动成功，请访问 http://127.0.0.1:${port}`)
});