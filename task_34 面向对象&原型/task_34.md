---
title: task_34
---
### OOP 指什么？有哪些特性

### 如何通过构造函数的方式创建一个拥有属性和方法的对象? 

### prototype 是什么？有什么特性 

### 画出如下代码的原型图
```
function People (name){
  this.name = name;
  this.sayName = function(){
    console.log('my name is:' + this.name);
  }
}

People.prototype.walk = function(){
  console.log(this.name + ' is walking');  
}

var p1 = new People('饥人谷');
var p2 = new People('前端');
```

### 创建一个 Car 对象，拥有属性name、color、status；拥有方法run，stop，getStatus 

###  创建一个 GoTop 对象，当 new 一个 GotTop 对象则会在页面上创建一个回到顶部的元素，点击页面滚动到顶部。拥有以下属性和方法
```
1. `ct`属性，GoTop 对应的 DOM 元素的容器
2.  `target`属性， GoTop 对应的 DOM 元素
3.  `bindEvent` 方法， 用于绑定事件
4 `createNode` 方法， 用于在容器内创建节点
```