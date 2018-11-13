## 项目简介
### 1.
这是一款招聘APP,实现基本的用户登录注册及注销功能,BOSS与应聘者之间可以实时聊天

项目前后端分离的模式进行开发，前端采用React + React Router + Redux,UI组件使用的是 Antd Design Mobile, 用Node.js的Express框架编写服务器端逻辑, 使用MongoDB来存储用户数据及聊天信息。用户之间实时聊天功能采用socket.io实现。

### 2.
- 在开发环境中，配置`package.json`文件的`proxy`选项来转发客户端发送的请求：  
```
"proxy": "http://localhost:9093"
```

- 使用`axios`发送异步请求,同时使用`axios.interceptors`设置拦截器，比如全局的loading:
```   
 //config.js
 import axios from 'axios';
 import { Toast } from 'antd-mobile';
 // 拦截请求
 axios.interceptors.request.use(function(config){
    Toast.loading('加载中', 0);
    return config;
 });

 // 拦截响应
 axios.interceptors.response.use(function(config){
    setTimeout(function() {
        Toast.hide();
    }, 2000);
    return config;
 });
```

- 本项目中用`cookie`来存储用户登录的状态。需要安装`cookie-parser`插件来对`cookie`进行操作

- 安装`redux-thunk`插件来处理异步的`dispatch`操作，同时使用`applyMiddleware`开启中间件
```
// index.js
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const store = createStore(counter, applyMiddleware(thunk));
//index.reducer.js
export const  increaseAsy = () => {
    return dispatch => {
        setTimeout(function() {  
            dispatch(increase());
        }, 2000);     
    }
}
```
再使用`react-redux`来连接`react`和`redux`

- 使用装饰器模式来编写`connect`,需要安装`@babel/plugin-proposal-decorators`插件，同时配置`package.json`文件中`babel`选项中的`plugins`选项:

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
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
},
```

- 用户注册页面时通过`post`接口来向服务器发送请求，在`Express`中，需要安装`body-parser`来对`post`请求的请求体进行解析

- 通过MD5来对用户密码进行加密，在这里引入`utility`库来实现MD5加密,同时对密码进行加盐

```
function md5Password(pwd){
    const salt = 'YZH_IS_GOOD !!!!!'
    return utils.md5(utils.md5(pwd+salt))
}
```

### 3.
![](https://github.com/yzhclear/yzhchat/blob/master/navimg/1.jpg)    
![](https://github.com/yzhclear/yzhchat/blob/master/navimg/2.jpg)    
![](https://github.com/yzhclear/yzhchat/blob/master/navimg/3.jpg)    
![](https://github.com/yzhclear/yzhchat/blob/master/navimg/4.jpg)     
![](https://github.com/yzhclear/yzhchat/blob/master/navimg/5.jpg)    
