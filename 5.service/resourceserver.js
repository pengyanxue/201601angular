var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname));
app.use(require('body-parser'),json());
app.get('/', function (req, res) {
    res.sendFile(path.resolve('naresource.html'));
});
var books=[{id:1,name:'node.js'}];
//���û�����/books·����ʱ��
app.route('/books').get(function(req,res){
    res.send();
}).post((req,res)=>{//����һ����Դ
    //��ν��տͻ��˴�������post������
    var book=req.body;
    book.id=books[books.length-1]+1;
    books.push({book});
    res.send(book);
});
app.listen(8080);
