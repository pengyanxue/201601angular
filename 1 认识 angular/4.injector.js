/**
 * Created by Administrator on 2016/6/15.
 */
//����Ҫִ�еĺ���
var greet=function(words){
    console.log(words.text);
}
//�൱�����ǵĶ���⣬�������������ܹ�ע��Ķ�������
var registry={
    words:{
        text:'hello'
    },
    school:{
        text:'zfpx'
    }
}
//�Զ�ע�������������в�������ĺ���
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