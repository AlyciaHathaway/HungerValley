---
title: task_23
---
### dom对象的innerText和innerHTML有什么区别？

 - innerText是一个可写属性，返回元素内包含的文本内容，在多层次的时候会按照元素由浅到深的顺序拼接其内容
 - innerHTML属性作用和innerText类似，但是不是返回元素的文本内容，而是返回元素的HTML结构，在写入的时候也会自动构建DOM

### elem.children和elem.childNodes的区别？

 - 对于DOM元素，children是指DOM Object类型的子对象，不包括tag之间隐形存在的TextNode，而childNodes包括tag之间隐形存在的TextNode对象

### 查询元素有几种常见的方法？ES5的元素选择方法是什么?
 - getElementById()
 - getElementsByTagName()
 - getElementsByClassName()
 - getElementsByname()
 - ES5元素选择的方法是querySelector和querySelectorAll
### 如何创建一个元素？如何给元素设置属性？如何删除属性
 - var node = document.createElement();
 - node.setAttribute('属性名', '属性值');
 - node.removeAttribute('属性名');

### 如何给页面元素添加子元素？如何删除页面元素下的子元素?

 - var node = document.createElement('child');
 - documnet.body.appendChild(child);
 - document.body.removeChild(child);

### element.classList有哪些方法？如何判断一个元素的 class 列表中是包含某个 class？如何添加一个class？如何删除一个class?
```
var node = document.createElement('div');
node.setAttribute('class', 'leftbar first');
node.classList //['leftbar', 'first']
node.classList.add('float') //添加一个类
node.classList.contains('leftbar') //是否包含leftbar返回ture
node.classList.remove('leftbar') //删除类
node.classList.toString() //将类数组对象转换为字符串
```
### 如何选中如下代码所有的li元素？ 如何选中btn元素？
```
<div class="mod-tabs">
   <ul>
       <li>list1<li>
       <li>list2<li>
       <li>list3<li>
   </ul>
   <button class="btn">点我</btn>
</div>
var list = document.querySelectorAll('.mod-tabs ul li')
var list = document.getElementByTagName('li')

var btn = document.querySelector('btn')
var btn = document.getElementByClassName('btn')
```
