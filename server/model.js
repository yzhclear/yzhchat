const mongoose = require('mongoose')

//连接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB_URL)

const models = {
    user: {
        'user': {'type': String, 'require': true},
        'pwd': {'type': String, 'require': true},
        'type': {'type': String, 'require': true},
        'avatar': {'type': String},
        'desc': {'type': String},
        'title': {'type': String},
        'company': {'type': String},
        'money': {'type': String}
    },
    chat: {
        'chatid': {'type': String, require: true}, //两人聊天信息的唯一ID
        'from': {'type': String, 'require': true},
        'to': {'type': String, 'require': true},
        'read': {'type': Boolean, 'default': false},
        'content': {'type': String, 'require': true, 'default': ''},
        'create_time': {'type': Number, 'default': new Date().getTime()}
    }
}

for(let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}
