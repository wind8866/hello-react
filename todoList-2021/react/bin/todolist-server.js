// 参考：https://chuyao.github.io/2017/07/11/simple-api-server-with-nodejs/

const express = require('express')
const app = express()

// 初始数据
let todoList = [
    {
        id: '1',
        text: 'TodoList from React',
        finish: true,
    }, {
        id: '2',
        text: 'TodoList from jQuery',
        finish: false,
    },
]
let count = 2
const timer = 1000;


const formatRespond = ({ data = {}, code = 200 }) => {
    return JSON.stringify({
        code: code,
        data: data
    })
}


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


// 请求 todoList 接口
app.get('/api/list', (req, res) => {
    setTimeout(() => {
        res.send(formatRespond({ data: todoList }))
    }, timer)
})

// 添加 todo 接口
// text: String
app.get('/api/add', function(req, res){
    // console.log(req, req.query)
    if(req.query.text != null) {
        const todo = {
            id: ''.concat(++count),
            text: req.query.text,
            finish: false,
        }
        todoList.push(todo)
        console.log('请求成功', req.query)
        setTimeout(() => {
            res.send(formatRespond({ data: todo }))
        }, timer)
    } else {
        console.error('请求失败', req.query)
        res.send(formatRespond({ code: 501 }))
    }
})

// changeFinish 接口
// id: String
app.get('/api/change', function(req, res){
    console.log(req.query);
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
        setTimeout(() => {
            res.send(formatRespond({ code: 200 }))
        }, timer)
    } else {
        res.send(formatRespond({ code: 501 }))
    }
});

// delTodo 接口
// id: String
app.get('/api/del', function(req, res){
    if(req.query.id != null) {
        todoList = todoList.filter(todo => (req.query.id !== todo.id));
        setTimeout(() => {
            res.send(formatRespond({ code: 200 }))
        }, timer)
    } else {
        res.send(formatRespond({ code: 501 }))
    }
});


// 启动服务
const port = 2333
app.listen(port, function(){
  console.log(`启动成功，请访问 http://127.0.0.1:${port}`)
});