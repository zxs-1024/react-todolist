To Do List
[To Do List](https://zhanghao-zhoushan.github.io/react-todolist/build/index.html)

#Github Pages 部署项目
**1 Create a new repository**
**2 Settings 的 GitHub Pages**
**3 选择Source None => master branch 点击Save**
**4 页面刷新，生成项目静态页面地址https://------------------------**
**5 在项目中新建index.html页面，进入刚才生成的静态地址即可访问**

**react npm run build 创建项目部署后后有静态文件地址错我，404，原因是create-react-app 的webpack.conifg.js中使用 / 生成地址**

**在package.json 加上 "homepage": "." 即可**

