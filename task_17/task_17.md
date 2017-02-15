---
title: task_17
---
### JavaScript 定义了几种数据类型? 哪些是原始类型?哪些是复杂类型?原始类型和复杂类型的区别是什么?
**七种**

 - 数值(number)：整数和小数
 - 字符串(string)：字符组成的文本
 - 布尔值(boolean)：true（真）和false（假）
 - undefined：表示“未定义”或不存在，即此处目前没有任何值
 - unll：表示空缺，即此处应该有一个值，但目前为空
 - 对象(object)：各种值组成的集合。对象又分成三个子类型：狭隘的对象（object），数组（array），函数（function）。
 - 数值、字符串、布尔值称为原始类型（primitive type）的值；
将对象称为复杂类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器；
undefined和null，两个特殊值。

**ES6**

 - symbol类型

### typeof和instanceof的作用和区别?

 - typeof用来判断基本数据类型，返回数据类型的字符串
 - instanceof用于判断一个变量是否某个对象的实例，运算符返回一个布尔值。instanceof只能用来判断对象和函数。

### 如何判断一个变量是否是数字、字符串、布尔、函数
```
typeof 123 === 'number' 判断是否是数字
typeof '123' === 'string' 判断是否为字符串
typeof true ==='boolean' 判断是否为布尔
typeof a ==='function' 判断是否为函数
```
### NaN是什么? 有什么特别之处?

 - NaN（Not a Number），它本身是数值，代表不能表示的数，NaN和任何值都不相等，包括自身

### 如何把非数值转化为数值?

 - Number()函数
 - parseInt()方法用于将字符串转为整数，返回一个10进制数或NaN
 - parseFloat()方法用于将一个字符串转为浮点数

### == 与 ===有什么区别

> 它们的区别是相等运算符（==）比较两个值是否相等，严格相等运算符（===）比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符（===）直接返回false，而相等运算符（==）会将它们转化成同一个类型，再用严格相等运算符进行比较。

### break与continue有什么区别

 - break语句用于跳出代码块或循环
 - continue语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环

### void 0 和 undefined在使用场景上有什么区别

 - void运算符的作用是执行一个表达式，然后不返回任何值，或者说返回undefined。这个运算符主要是用于书签工具，防止网页跳转
 - 在某些情境下undefined是可以被赋值的，比如在函数中，这样的话就不能用undefined来进行判断了

### 代码
```
console.log(1+1);//输出2，两个数字加法运算
console.log("2"+"4");//输出'24'，两个字符串类型的做字符串拼接
console.log(2+"4");//输出'24'，一个是数字一个是字符串，数字转化为字符串后拼接
console.log(+"4");//输出4，只有一个字符串会转换成数字输出
```
```
var a = 1;  
a+++a;  //输出3，理解为a++ + a,++运算符比+运算优先级更高，a++结果返回1，但是a已经变成了2，所以结果为1+2=3。
typeof a+2;//输出"number2"，typeof的优先级高于+运算，所以输出字符串number，字符串与数字相加时，数字转换为字符串，然后字符串拼接就变成"number2"
```
```
var a = 1;
var b = 3;
console.log( a+++b );//输出结果为4，++运算优先于+运算，理解为(a++)+b，a++结果返回1，虽然此时a的值变为2，但不继续参与运算，运算为1+3=4。
```

### 遍历数组，把数组里的打印数组每一项的平方

```
var arr = [3,4,5]
//for(i=0;i<arr.length;i++){console.log(arr[i]*arr[i])}
//输出结果为9 16 25
```

### 遍历 JSON, 打印里面的值

```
var obj = {
 name: 'hunger', 
 sex: 'male', 
 age: 28 
}
for(var a in obj){
console.log(a+":"+obj[a])
}
//结果name:hunger sex:male age:28
```
### 以下代码输出
```
var a = 1, b = 2, c = 3;
var val = typeof a + b || c >0;
console.log(val); 
//结果为number2。val值为"number2",只要“||”前面求值为true，结果都返回“||”前面的值。

var d = 5;
var data = d ==5 && console.log('bb');
console.log(data);
//结果为bb，“&&”前面求值为true，结果返回“&&”后面的值。

var data2 = d = 0 || console.log('haha');
console.log(data2);
//结果为haha，只要“||”前面求值为false，结果返回“||”后面的值。
 
var x = !!"Hello" + (!"world", !!"from here!!");
console.log(x);
//结果为2，空字符串为false，非空则为true，var x = true+(false+true),true为1，1+1=2。
```