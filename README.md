## To Do List

### [Jump To Do List Page](https://zhanghao-zhoushan.github.io/react-todolist/build/index.html)

项目是用 `create-react-app` 构建，使用 `redux` 管理数据状态，是一个熟悉 `react` 、 `jsx` 语法，熟悉 `redux` 构建项目的练手项目，项目 `UI` 还是比较不错的，采用了 `react` 官网颜色配置，作为日常 `TODO` 记录。

![To Do List](https://images-cdn.shimo.im/X4lpiQm8dhcEJF87/tolist.jpg!thumbnail)

### Github Pages 部署项目

1. `Create a new repository`。

2. `Settings 的 GitHub Pages`。

3. 选择 `Source None => master branch` 点击 `Save`。

4. 页面刷新，生成项目静态页面地址。

5. 在项目中新建 `index.html` 页面，进入刚才生成的静态地址即可访问。

> PS: `react npm run build` 创建项目部署后后有静态文件地址错误，导致页面 `404`，原因是 `create-react-app` 的 `webpack.conifg.js` 中使用 / 生成地址，在 `package.json` 加上 `"homepage": "."` 即可。

