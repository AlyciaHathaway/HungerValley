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
### 代码
 - 代码输出
	```
	function getInfo(name, age, sex){
		console.log('name:',name);
		console.log('age:', age);
		console.log('sex:', sex);
		console.log(arguments);
		arguments[0] = 'valley';
		console.log('name', name);
		}
	getInfo('饥人谷', 2, '男');//name:饥人谷 age:2 sex:男 ['饥人谷',2,'sex'] name valley
	getInfo('小谷', 3);//name:小谷、age:3、sex:undefined、['小谷', 3]、name vally;
	getInfo('男');//name:男、age:undefined、sex:undefined、['男']、name vally;
	```

 - 写一个函数，返回参数的平方和？
	```
	function sumOfSquares() {
		var sum = 0;
		for (var i=0; i < arguments.length; i++) {
			sum = sum + arguments[i] * arguments[i];
		}
		console.log(sum);
	}
	```

 - 代码输出
	```
	console.log(a); //声明提前，但是未赋值所以为undefined
	var a = 1; 
	console.log(b); //会报错，b is not defined
	```

 - 代码输出
	```
	sayName('world'); //hello world,因为函数声明前置
	sayAge(10); //sayAge is not a function函数表达式只将函数表达式里的sayAge前置，此时还未赋值，所以以函数的方式调用会报错
	function sayName(name){
	console.log('hello ', name);
	}
	var sayAge = function(age){
	console.log(age);
	};
	```

 - 代码输出
	```
	var x = 10
	bar() 
	function foo() {
	  console.log(x)  
	}
	function bar(){
	  var x = 30
	  foo()
	}
	```
	```
	globalContext = {
		AO:{
			x:10
			foo:function
			bar:function
		},
		Scope:null
	}

	//foo()声明时
	foo.[[scope]] = globalContext.AO
	//bar声明时
	bar.[[scope]] = globalContext.AO
	//调用bar时,bar的执行上下文
	barContext = {
		AO:{
		 x:30
		 foo:function
		}
		scope:bar.[[scope]] = globalContext.AO
	}
	//调用foo时，先从bar的AO中，找不到再从scope中找，这里在barConetext中能够找到
	，就立即调用。
	//调用时进入foo的执行上下文
	fooContext = {
		AO:{	
		}
		scope:foo.[[scope]] = globalContext.AO
	}
	//所以从scope中即globalContext.AO中可以找到x:10。
	```

 - 代码输出
	```
	var x = 10;
	bar() 
	function bar(){
	  var x = 30;
	  function foo(){
		console.log(x) 
	  }
	  foo();
	}
	```
	```
	globalContext = {
		AO:{
			x:10
			bar:function
		}
		scope:null
	}
	bar.[[scope]] = globalContext.AO 
	barContext = {
		AO:{
		 x:30
		 foo:function
		}
		bar.[[scope]] = globalContext.AO 
	}
	foo.[[scope]] = barContext.AO
	fooContext = {
		AO:{
		}
		foo.[[scope]] = barContext.AO
	}
	//所以调用foo时会在barContext.AO中找到x:30。
	```

 - 代码输出
	```
	var x = 10;
	bar() 
	function bar(){
	  var x = 30;
	  (function (){
		console.log(x)
	  })()
	}
	```
	```
	globalContext = {
		AO:{
			x:10
			bar:function
		}
		scope:null
	}
	bar.[[scope]] = globalContext.AO 
	barContext = {
		AO:{
		 x:30
		 ():function
		}
		bar.[[scope]] = globalContext.AO 
	}
	().[[scope]] = barContext.AO
	()Context = {
		AO:{
		}
		().[[scope]] = barContext.AO
	}
	//所以调用匿名函数时会在barContext.AO中找到x:30。
	```

 - 代码输出
	```
	var a = 1;

	function fn(){
	  console.log(a)
	  var a = 5
	  console.log(a)
	  a++
	  var a
	  fn3()
	  fn2()
	  console.log(a)

	  function fn2(){
		console.log(a)
		a = 20
	  }
	}

	function fn3(){
	  console.log(a)
	  a = 200
	}

	fn()
	console.log(a)
	```
	```
	globalContext = {
		AO:{
			a:200
			fn:function
			fn3:function
		}
	}
	fn.[[scope]] = globalContext.AO
	fn3.[[scope]] = globalContext.AO
	fnContext = {
		AO:{
			a:20
			fn2:function
		}
		scope:fn.[[scope]] = globalContext.AO
	}
	fn2.[[scope]] = fnContext.AO
	//第一次undefined 第二次5 
	//执行fn3时，进入fn3的执行上下文
	fn3Context = {
		AO:{
		}
		fn3.[[scope]] = globalContext.AO
	} 
	//第三次a在globalContext.AO中查找 a=1，并在globalContext.AO中的a赋值为200
	fn2Context = {
		AO:{
		}
		fn2.[[scope]] = fnContext.AO
	}
	//第四次a在fnContext.AO中找到a=6，并赋值a=20
	//第五次在fnContext.中查找 a=20
	//第六次在globalContext中查找 a=200
	```