### 使用
0、检测是否安装
```bash
node --version
cnpm --version
```
1、安装 nodejs
2、安装 cnpm
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
3、从命令行进入相关目录并安装依赖，如进入 react
```bash
cd todoList/react
cnpm install
```
4、启动项目
```bash
npm start
```

---
开启服务端接口
```
cd todoList/server
node todolist-server.js
# 测试是否成功：<http://localhost:2333/api/list>
```
