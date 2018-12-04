
# 所需知识

- [dva](https://dvajs.com/)
- [React](https://doc.react-china.org/)
- [Ant Design](https://ant.design/docs/react/introduce-cn)
- [ES6](http://es6.ruanyifeng.com/#docs/let)
- [UmiJS](https://umijs.org/)

### 参考链接

[dva所需知识导图](https://dvajs.com/knowledgemap/#javascript-%E8%AF%AD%E8%A8%80)

[UmiJS与dva的关系](https://umijs.org/guide/#%E4%BB%96%E5%92%8C-dva%E3%80%81roadhog-%E6%98%AF%E4%BB%80%E4%B9%88%E5%85%B3%E7%B3%BB%EF%BC%9F)

# 开发
1. 安装node.js运行环境
2. 进入项目目录执行`npm install`，建议使用`cnpm install`(<http://npm.taobao.org/>)
3. 运行`npm start`

# 部署
1. 修改`/.webpackrc.js`中`target`属性改为`build`
2. `npm run build`，将`dist`中文件放入服务器根目录

# 目录结构

~~[参考 Ant Design Pro](https://pro.ant.design/docs/getting-started-cn#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)~~

dva 2.x之后底层使用UmiJS开发框架，所以目录结构是[UmiJS规定的](https://umijs.org/guide/app-structure.html)

```
.
├── .editorconfig       
├── .eslintrc           
├── .gitignore          
├── .umirc.js           # umi配置文件
├── .webpackrc.js       # 配置代理
├── README.md
├── doc                 # 文档
├── mock                # 测试数据
│   └── .gitkeep
├── package.json        # 包依赖
└── src                 # 主
    ├── assets          # 静态文件
    ├── components      # 展示组件
    ├── containers      # 容器组件
    ├── global.less     # 全局样式
    ├── layouts         # 布局
    ├── models          # dva models
    ├── pages           # 路由
    ├── services        # 请求相关
    └── utils           # 工具
```

# 代码规范
- 语句最后不使用分号
- 尽量使用 ES6 语法
- 复杂逻辑写注释
- 函数命名规范
  - set、update更新
  - get获取数据
  - del、delete删除
  - fill绘制、填充数据
  
