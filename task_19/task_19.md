---
title: task_19
---
### 引用类型有哪些？非引用类型有哪些

 - 基本类型值（数值、布尔值、null和undefined）：指的是保存在栈内存中的简单数据段
 - 引用类型值（对象、数组、函数、正则）：指的是那些保存在堆内存中的对象，变量中保存的实际上只是一个指针，这个指针执行内存中的另一个位置，由该位置保存对象


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

function copy(obj) {
	var newObj = {};
	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			if(typeof obj[key] === 'number' || typeof obj[key] === 'bollean' 
				|| typeof obj[key] === 'string' || typeof obj[key] === undefined
				 || typeof obj[key] === null) {
				newObj[key] = obj[key]
			}else{
				newObj[key] = copy(obj[key])
			}
		}
	}
	return newObj;
}

JSON.stringify(obj);
JSON.parse(JSON.stringify(obj));
```