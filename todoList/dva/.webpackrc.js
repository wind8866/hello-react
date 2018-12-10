// 打开注释，使用后端提供的接口

export default {
  "proxy": {
    "/api": {
      "target": 'http://127.0.0.1:2333/',// 这里是 Node 提供的 server 服务
      "changeOrigin": true,
      "pathRewrite": { "" : "" }
    }
  },
}
