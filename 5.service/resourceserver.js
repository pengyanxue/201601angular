var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname));
app.use(require('body-parser').json());
app.get('/', function (req, res) {
    res.sendFile(path.resolve('ngresource.html'));
});
var books = [{id: 1, name: 'node.js'}];




//���û�����/books·����ʱ��
app.route('/books').get(function (req, res) {
    res.send(books);
}).post((req, res)=> {//����һ����Դ
    //��ν��տͻ��˴�������post������
    var book = req.body;
    book.id = books[books.length - 1].id + 1;
    books.push(book);
    res.send(book);
});
app.route('/books/:id').delete((req, res)=> {
    books = books.filter((book)=> {
        return book.id != req.params.id;

    });
    res.send({});
}).put((req, res)=> {
    books = books.map(item => {
        if (item.id == req.params.id) {
            return req.body;
        } else {
            return item;
        }
    });
    res.send(req.body);
}).get((req,res)=>{
    res.send(books[0]);
});
app.listen(9090);
