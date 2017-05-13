let mongoose = require('mongoose');

let db = mongoose.connect('mongodb://localhost/my_database');

db.connection.on("open", function () {
    console.log("数据库连接成功");
});

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

//默认集合名字为cats
let TaskItem = mongoose.model('TaskItem', {
    username: String,
    content:String,
    regtime:String,
    comments: [],
});

module.exports=TaskItem;