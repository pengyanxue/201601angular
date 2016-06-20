/**
 * Created by Administrator on 2016/6/16.
 */
function Scope(){
    this.$$watchers=[];//观察者的数组
}
//当scope上expr变化的时候执行的回调监听
Scope.prototype.$watch=function(expr,listener){
    var watcher={
        expr:expr,
        fn:listener,
        last:undefined
    }
    this.$$watchers.push(watcher);
};
Scope.prototype.$digest=function(){
    var self=this;
    this.$$watchers.forEach(function(watcher){

        var newVal= self[watcher.expr];
        var oldVal= watcher.last;
        //console.log(newVal);
        //console.log(oldVal);
        if(newVal!=oldVal){
            watcher.fn(newVal,oldVal);
            watcher.last=newVal;
        }
    })
}
//应用变化，一般可以由我们来调用
Scope.prototype.$apply=function(){
    this.$digest();
}

var scope=new Scope();
var age=0;
scope.age=age++;
scope.$watch('age',function(newVal,oldVal){
    console.log(newVal,oldVal);
})
scope.age=age++;
scope.$apply();
