/**
 * Created by Administrator on 2016/6/15.
 */
function call(self){
    // 1  �޸ĺ����е�thisָ��
    // 2  �ú���ִ��
}
var obj={name:'zfpx'};
function say(){
    console.log(this.name);
}
console.log(Function.prototype.call);
Function.prototype.mycall=function(thisObj){
    var source=this.toString();
    source=source.replace(/this/,function(result){
        return 'arguments[0]';
    });
    console.log(source);
    //var func=new Function('thisObj',source);
    eval('('+source+')(thisObj)');
    //(source)(thisObj);
}
say.call(obj);say.mycall(obj);
