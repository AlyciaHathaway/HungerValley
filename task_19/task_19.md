---
title: task_19
---
### 引用类型有哪些？非引用类型有哪些

 - 基本类型值（数值、布尔值、null和undefined）：指的是保存在栈内存中的简单数据段
 - 引用类型值（对象、数组、函数、正则）：指的是那些保存在堆内存中的对象，变量中保存的实际上只是一个指针，这个指针执行内存中的另一个位置，由该位置保存对象

### 代码

 - 代码输出
	```
	var obj1 = {a:1, b:2};
	var obj2 = {a:1, b:2};
	console.log(obj1 == obj2); //false，因为对象是引用类型，变量obj1和obj2只是保存着储存相同值的对象的地址，但是它们本身并不相同。
	console.log(obj1 = obj2); //Object {a:1,b:2}
	这是将obj2的赋值给obj1，相当于obj1的指针也指向了obj2的堆空间
	console.log(obj1 == obj2); //true
	```
 - 代码输出
	```
	var a = 1
	var b = 2
	var c = { name: '饥人谷', age: 2 }
	var d = [a, b, c]

	var aa = a
	var bb = b
	var cc = c
	var dd = d

	a = 11
	b = 22
	c.name = 'hello'
	d[2]['age'] = 3

	console.log(aa) //1
	console.log(bb) //2 都是值传递，aa和a都会开辟一个块属于自己的栈空间
	console.log(cc) //{name:'hello',age:3} 对象的赋值是引用传递，cc和c都是指向同一块堆内存。
	console.log(dd) //[1,2,{name:'hello',age:3}] 数组的原始类型值传递，引用类型址传递
	```

 - 代码输出
	```
	var a = 1 
	var c = { name: 'jirengu', age: 2 }

	function f1(n){
	  ++n
	}
	function f2(obj){
	  ++obj.age
	}

	f1(a)  //1 ，会默认执行赋值动作，var n = a,属于值传递，++n时，a依旧保持原始值不变的。
	f2(c)  //会默认执行var obj = c;这时候它们都是指向同一块堆内存，当执行++obj.age时,对象c的age属性加一，所以这个时候c = {name:'jirengu',age:3}
	f1(c.age) //取出c.age = 3 默认执行var n = 3.不会影响c.age
	console.log(a)  //1
	console.log(c)  //{name:'jirengu',age:3}
	```

 - 过滤如下数组，只保留正数，直接在原数组上操作
	```
	var arr = [3,1,0,-1,-3,2,-5]
	function filter(arr){
		for (var i=0; i<arr.length; i++) {
			if (arr[i] <= 0) {
				arr.splice(i,1); //当有一个数被删除时，下一个数的index就变成了现在的这个值。如果继续循环就会错过下一个元素
				i--;
			}
		}
	}
	filter(arr)
	console.log(arr) // [3,1,2]
	```

 - 过滤如下数组，只保留正数，原数组不变，生成新数组
```
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
var newArr = []; 
var j = 0;
	for (var i=0; i<arr.length; i++) {
		if (arr[i] > 0 ) {
			newArr[j] = arr[i];
			j++;
		}
	}
	return newArr;
}
var arr2 = filter(arr)
console.log(arr2)
console.log(arr)
```

### 写一个深拷贝函数，用两种方式实现
```
var obj = {
	age: 100,
	friend: {
		name: 'ruoyu',
		sex: 'male',
		child: {
			name: 'abc'
		}
	}
}
//深拷贝1
function copy(obj) {
	var newObj = {};
	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			if(typeof obj[key] === 'number' || typeof obj[key] === 'bollean' 
				|| typeof obj[key] === 'string' || typeof obj[key] === undefined
				 || typeof obj[key] === null) {
				newObj[key] = obj[key]
			}else{
				newObj[key] = copy(obj[key])//递归，把深层的对象再次调用函数拷贝
			}
		}
	}
	return newObj;
}
//深拷贝2
function copy(obj) {
	return newObj = JSON.parse(JSON.stringify(obj));
}
```