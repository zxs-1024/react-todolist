# To Do List

### [Jump To Do List Page](https://zhanghao-zhoushan.github.io/react-todolist/dist/index.html)

### Github Pages 部署项目

~~项目是用 `create-react-app` 构建，使用 `redux` 管理数据状态，是一个熟悉 `react` 、 `jsx` 语法，熟悉 `redux` 、 `dva` 构建项目的练手项目。~~

项目是用 `create-react-app` 构建，使用 `remacth` 管理数据状态，是一个熟悉 `react` 、 `jsx` 语法，熟悉 `redux` 、 构建项目的练手项目。

项目 `UI` 还是比较不错的，采用了 `react` 官网颜色配置，作为日常 `TODO` 记录。

![To Do List](https://images-cdn.shimo.im/X4lpiQm8dhcEJF87/tolist.jpg!thumbnail)

### Github Pages 部署项目

1. `Create a new repository`。
2. `Settings 的 GitHub Pages`。
3. 选择 `Source None => master branch` 点击 `Save`。
4. 页面刷新，生成项目静态页面地址。
5. 在项目中新建 `index.html` 页面，进入刚才生成的静态地址即可访问。

> PS: `react npm run build` 创建项目部署后后有静态文件地址错误，导致页面 `404`，原因是 `create-react-app` 的 `webpack.conifg.js` 中使用 / 生成地址，在 `package.json` 加上 `"homepage": "."` 即可。

## 核心概念

- State：一个对象，保存整个应用状态
- View：React 组件构成的视图层
- Action：一个对象，描述事件
- connect 方法：一个函数，绑定 State 到 View
- dispatch 方法：一个函数，发送 Action 到 State

### redux

[Redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

### redux-thunk

改造 `store.dispatch` ，让 `store.dispatch` 可以接受函数作为参数

### redux-actions

异步操作的解决方案，让 `Action Creator` 返回一个 `Promise` 对象

### redux-actions

异步操作的解决方案，让 `store.dispatch` 函数接收一个 `Promise` 对象作为参数

### redux-thunk

改造 `store.dispatch` ，使得后者可以接受函数作为参数

### react-redux

- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 带有内部状态
- 使用 Redux 的 API

> connect

`connect` 方法是一个高阶函数，自动生成容器组件，连接 `model` 和组件

> Provider

`Provider` 组件，可以让容器组件拿到 `state`

### Redux-saga

使用 redux saga 进行异步操作
[redux-saga-in-chinese](https://redux-saga-in-chinese.js.org/)

### dva-model-extend

扩展 `dva` 的 `model`

[dva-model-extend](https://github.com/dvajs/dva-model-extend)

### redux-saga

[redux-saga](https://redux-saga-in-chinese.js.org/)

### dva

> Reducer

`reducer` 是一个函数，接受 `state` 和 `action`，返回老的或新的 `state` ，即：

```
(state, action) => state
```

> Effect

处理异步流程，底层引入了 `redux-sagas`

```
app.model({
  namespace: 'todos',
  effects: {
    *addRemote({ payload: todo }, { put, call }) {
      yield call(addTodo, todo);
      yield put({ type: 'add', payload: todo });
    },
  },
});
```

### dva-loading

[dva-loading 实践用法](https://www.jianshu.com/p/61fe7a57fad4)

### UmiJS

可插拔的企业级 react 应用框架

[UmiJS](https://umijs.org/guide/with-dva.html#%E7%89%B9%E6%80%A7)

### classnames

处理多个 `className`

### JS 函数式编程指南

[JS 函数式编程指南](https://github.com/llh911001/mostly-adequate-guide-chinese)

### logoAnt Design Pro

[Ant Design Pro](https://pro.ant.design/docs/router-and-nav)

###

[重新思考 Redux](https://rematch.gitbook.io/handbook/)
[rematch][https://rematch.gitbooks.io/rematch/#getting-started]
