//任何function在执行的时候，都会隐式传入两个参数：this和arguments

var test = function() {
    console.log(this); //window
    console.log(arguments); //['a']
};
test(a);
//函数调用方式，this指向全局对象


var john = {
    f: 'john'
};
function func() {
    alert(this.f)
}
john.sayHi = func;
john.sayHi(); //john
//方法调用方式，this指向调用方


function Test() {
    this.a = a;
    console.log(this); //{a: 'a'}
}
new Test();
//构造函数调用方式，this将会绑定到新创建的对象


function Test() {
    console.log(this); //{p: 1}
    this.a = 'a';
}
Test.call({p: 1});
Test.apply({p: 1});
//call和apply的形式，this绑定到传入的第一个参数