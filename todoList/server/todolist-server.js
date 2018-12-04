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
        message: 'ok',
        data: data
    })
}

// 请求 todoList 接口
app.get('/api/list', (req, res) => {
    res.send(formatRespond({ data: todoList, code: 200 }));
})

// 添加 todo 接口
app.get('/api/add', function(req, res){
    // console.log(req, req.query)
    if(req.query.name != null) {
        todoList.push({
            id: ''.concat(++count),
            name: req.query.name,
            finish: false,
        })
        res.send(formatRespond({ code: 200 }));
    } else {
        res.send(formatRespond({ code: 501 }));
    }
    
})

// changeFinish 接口
app.get('/api/change', function(req, res){
    if(req.query.id != null) {
        todoList = todoList.map(todo => {
            if(req.query.id === todo.id){
                return {
                    ...todo,
                    finish: !todo.finish
                }
            }
            return todo
        })
        res.send(formatRespond({ code: 200 }));
    } else {
        res.send(formatRespond({ code: 501 }));
    }
});

// 启动服务
const port = 2333
app.listen(port, function(){
  console.log(`启动成功，请访问 http://127.0.0.1:${port}`);
});