---
title: task_21
---
**Math任务**
### 写一个函数，返回从min到max之间的随机整数，包括min不包括max 
```
function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
```
### 写一个函数，返回从min都max之间的随机整数，包括min包括max 
```
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
```
### 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z
```
function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
function getRandStr(len) {
	var dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var str = '';
	for (var i=0; i<len; i++) {
		str += dict[random(0,62)]
	}
	return str;
}
```
### 写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255
```
function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
function randomIP(len) {
	var arr = [];
	for (var i=0; i<4; i++) {
		arr.push(random(0, 256))
	}
	return arr.join('.');
}
```
### 写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff
```
function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
function getRandColor() {
	var dict = '0123456789abcdef';
	var str = '#';
	for (var i=1; i<7; i++) {
		str += dict[random(0, dict.length)]
	}
	return str;
}
```

**数组任务**
### 数组方法里push、pop、shift、unshift、join、split分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法

 - 栈操作：先进后出
	```
	//push:从数组末添加元素,返回添加后数组的长度
	var arr = [];
	arr.push(1);
	arr.push(2);
	console.log(arr); //[1,2]

	//pop:删除最后一元素:，并返回被删除的元素
	arr.pop() //2
	console.log(arr) //[1]
	```

 - 队列操作：先进先出
	```
	//unshift:返回添加后数组的长度
	var arr = ['b','c','d'];
	arr.unshift('a');
	console.log(arr); //['a','b','c','d'];
	//shift：删除数组的第一个元素，并返回被删除的元素
	arr.shift();
	console.log(arr); //['b','c','d']
	```

 - join('')：以传入的参数连接数组为字符串，如果不传递参数，默认为','连接
	```
	var arr = ['jirengu','is','very','nice']
	arr.join(); // "jirengu,is,very,nice"
	```

 - split:将字符串以传入的参数切分成数组
	```
	var str = "ji-ren-gu";
	str.split('-'); //["ji","ren","gu"];
	//传入第二个参数规定数组的长度
	str.spilt("-",1) //["ji"]
	```

 - splice方法:第一个参数是操作的位置，第二个参数是替换字符的数量，第三个参数是替换为的字符,返回值是被删除的元素组成的数组
	```
	//1、实现push
	var item = 4;
	var arr = [1,2,3];
	arr.splice(arr.length,0,item);
	console.log(arr);

	//2、实现pop方法
	arr.splice(arr.length-1,1);

	//3、实现unshift方法
	arr.splice(0,0,item);

	//4、实现shift方法
	arr.splice(0,1);
	```

### 写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作
```
var arr = [2, 4, 6];
function squareArr(arr) {
	for (var i=0; i<arr.length; i++) {
		arr[i] = Math.pow(arr[i], 2)
	}
	return arr;
}
```
### 写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变
```
var arr = [3, -1, 2, '饥人谷', true];
function filterPositive(arr) {
	var newArr = [];
	for (var i=0; i<arr.length; i++) {
		if (typeof arr[i] === 'number') {
			if (arr[i] > 0) {
				newArr.push(arr[i]);
			}
		}
	}
	return newArr;
}
```

**Date任务**
### 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间

### 把hh-mm-dd格式数字日期改成中文日期

### 写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:

 - 刚刚（ t 距当前时间不到1分钟时间间隔）
 - 3分钟前 (t距当前时间大于等于1分钟，小于1小时)
 - 8小时前 (t 距离当前时间大于等于1小时，小于24小时)
 - 3天前 (t 距离当前时间大于等于24小时，小于30天)
 - 2个月前 (t 距离当前时间大于等于30天小于12个月)
 - 8年前 (t 距离当前时间大于等于12个月)