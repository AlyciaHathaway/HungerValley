---
title: task_26
---
### 下面的代码输出多少？修改代码让fnArr[i]() 输出 i。使用**两种以上的**方法
```
    var fnArr = [];
    for (var i = 0; i < 10; i ++) {
        fnArr[i] =  function(){
    	    return i;
        };
    }
    console.log( fnArr[3]() );  //10 ,因为循环的时候fnArr[i] = function(){return i} 右边的函数只是相当于一个函数代码片段，还没有执行，要到fnArr[3]()调用时右边的函数才会执行，此时循环已经结束，i已经变为了10
```
```
// 方法一
var fnArr = [];
for (var i=0; i<10; i++) {
	(function(n) {
		fnArr[i] = function() {
			return n;
		}
	})(i)
}
console.log(fnArr[3]());
// 方法二
var fnArr[];
for (var i=0; i<10; i++) {
	fnArr[i] = (function() {
		var n = i;
		return function() {
			return n;
		}
	})
}
console.log(fnArr[3]());
```

### 封装一个汽车对象，可以通过如下方式获取汽车状态
```
var Car = (function(){
   var speed = 0;
   function setSpeed(s){
       speed = s
   }
   ...
   return {
      setSpeed: setSpeed,
      ...
   }
})()
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate(); 
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error
```
```
var Car = (function() {
	var speed = 0;
	function setSpeed(n) {
		speed = n;
	}
	function getSpeed() {
		return speed;
	}
	function accelerate() {
		speed += 10;
	}
	function decelerate() {
		speed -= 10;
	}
	function getStatus() {
		if (speed > 0) {
			return 'running'
		}else {
			return 'stop'
		}
	}
	return {
		'setSpeed':setSpeed,
		'getSpeed':getSpeed,
		'accelerate':accelerate,
		'decelerate':decelerate,
		'getStatus':getStatus,
		'speed':'error'
	};
})();
```
### 下面这段代码输出结果是? 为什么?
```
var a = 1;
setTimeout(function(){
    a = 2;
    console.log(a);
}, 0);
var a ;
console.log(a);
a = 3;
console.log(a);
```

 - 第一次打印1，第二次打印3，第三次打印2
 - 变量提前声明a,赋值1，打印出1，再次重新赋值3，打印3。setTimeout设置0的参数，所以内部的函数排列到所有代码执行好后执行，故执行函数时，内部给a重新赋值2，但是当前函数局域内部没有a变量，所以继续往上层查找，找到就重新赋值2，打印2。

### 下面这段代码输出结果是? 为什么?
```
var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);
```

 - 代码陷入死循环，没有任何输出。
 - 代码执行顺序，变量flag赋值为true。执行setTimeout函数时，delay 是延迟的毫秒数
   (一秒等于1000毫秒)，函数的调用会在该延迟之后发生。如果省略该参数，delay取默认值0，把调用函数延迟到执行代码的末尾。那么执行while(flag){}的变量为true该循环无限循环下去，阻塞后续的代码的执行。

### 下面这段代码输出？如何输出`delayer: 0, delayer:1...`（使用闭包来实现）
```
for(var i=0;i<5;i++){
	setTimeout(function(){
         console.log('delayer:' + i );
	}, 0);
	console.log(i);
}
```
```
for(var i=0;i<5;i++){
    setTimeout(function(n){
         console.log('delayer:' + n );
    }(i), 0);
    console.log(i);
}
```

### 如何获取元素的真实宽高

 - 使用window对象的getComputedStyle()方法
```
<style>.box{height:50px;width:60px}</style>
<div class="box">123</div>
```
```
var box = document.querySelector('.box');
console.log(window.getComputedStyle(box)['height']); // 50px
console.log(window.getComputedStyle(box)['width']); // 60px
```

### URL 如何编码解码？为什么要编码？

 - JavaScript提供四个URL的编码/解码方法
	 1.decodeURI()
	 2.decodeURIComponent()
	 3.encodeURI()
	 4.encodeURIComponent()
 - 当需要解析URL的名称时可以使用encodeURI()
 - 当需要解析URL里的参数时可以使用encodeURIComponent()

### 补全如下函数，判断用户的浏览器类型
```
<script type="text/javascript">
	function isAndroid(){
		return /Android/.test(window.navigator.userAgent);
	}
	function isiPhone(){
		return /iphone/i.test(window.navigator.userAgent);
	}
	function isiPad(){
		return /ipad/i.test(window.navigator.userAgent);
	}
	function isIOS(){
		return /(ipad)|(iphone)/.test(widow.navigator.userAgent);
	}
</script>
```