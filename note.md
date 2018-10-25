# 创建项目及项目依赖
create-react-app yzhchat
cd yzhchat
npm run eject (报错: git add.    git commit am 'Save before ejecting')

express
nodemon  
antd-mobile
babel-plugin-import 按需加载antid-mobile
redux-thunk 异步
react-redux
redux

npm install --save-dev @babel/plugin-proposal-decorators
配置package.json
```
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd-mobile",
        "style": "css"
      }
    ],
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]

```
npm install react-router-dom --save


npm install axios --save
在package.json中配置   "proxy": "http://localhost:9093"

npm install cookie-parser --save

npm install body-parser --save

npm install utility -save
md5加密

npm install browser-cookies --save
