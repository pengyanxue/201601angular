var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname));
app.use(require('body-parser'),json());
app.get('/', function (req, res) {
    res.sendFile(path.resolve('naresource.html'));
});
var books=[{id:1,name:'node.js'}];
//当用户请求/books路径的时候
app.route('/books').get(function(req,res){
    res.send();
}).post((req,res)=>{//增加一个资源
    //如何接收客户端传过来的post请求体
    var book=req.body;
    book.id=books[books.length-1]+1;
    books.push({book});
    res.send(book);
});
app.listen(8080);
