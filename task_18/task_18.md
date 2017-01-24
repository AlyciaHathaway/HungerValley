---
title: task_18
---
### 函数声明和函数表达式有什么区别

 - 函数声明使用function来进行声明，函数声明提升，所以不论执行语句的位置皆可调用该函数。
	```
	function print(s) {
	  console.log(s);
	}
	```
 - 函数表达式通过赋值来声明函数，声明完毕后要加上分号表示该句结束，在表达式执行完后，函数才存在并可被调用
	```
	var print = function(s) {
	  console.log(s);
	};
	```

### 什么是变量的声明前置？什么是函数的声明前置

 - 变量提升
当一个变量被定义时，在代码执行前会先将变量进行初始化再执行语句。
 - 声明前置
当函数以函数声明的方式声明时，代码执行前会首先生成该函数，然后再执行语句

### arguments 是什么

 - argument是类数组对象，每个函数中都存在argument对象，argument并不是一个真正的数组
，所以不具备除length属性之外的属性，这个对象包含所有传入该函数的参数列表。
通过以下语句可将arguments转化为数组对象
 - `var args=Array.prototype.slice.call(arguments)`

### 函数的"重载"怎样实现

 - 函数length属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的”方法重载“
```
// 条件判断重载
function foo(name,age,sex) {
	if (name) {
	 console.log(name);
	}
	if (age) {
	 console.log(age);
	}
	if (sex){
	 console.log(sex);
	}
}
// arguments重载
function foo() {
	var sum = 0;
	for(var a=0; a<arguments.length; a++) {
		sum = sum + arguments[a];
	}
	return sum;
}
```

### 立即执行函数表达式是什么？有什么作用

 - 立即执行函数表达式（IIFE）函数在声明后立即执行，有效避免污染全局作用域
```
(function(){ /* code */ }());
(function(){ /* code */ })();
```
### 求n!，用递归来实现
```
function recursion(n) {
	if(n===1) {
		return 1;
	}else {
		return n * recursion(n-1);
	}
}
```