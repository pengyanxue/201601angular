/**
 * Created by Administrator on 2016/6/15.
 */
//这是要执行的函数
var greet=function(words){
    console.log(words.text);
}
//相当于我们的对象库，里面存放这所有能够注入的对象或服务
var registry={
    words:{
        text:'hello'
    },
    school:{
        text:'zfpx'
    }
}
//自动注入服务对象并且运行参数里面的函数
var inject=function(func){
    var source=func.toString();
    var matchers=source.match(/function\s?\((\w+)\)/);
    var argnames=matchers.slice(1);
    var args=[];
    for(var i=0;i<argnames.length;i++){
        var argobj=registry[argnames[i]];
        args.push(argobj);
    }
    func.apply(null,args);
    //func(registry.words);
}
inject(greet);//hello