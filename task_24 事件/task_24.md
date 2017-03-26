---
title: task_24
---
### DOM0 事件和DOM2级在事件监听使用方式上有什么区别？

 - DOM0事件通过JavaScript指定事件将一个函数方法直接赋值给一个元素事件处理程序事件。将这些属性设置一个函数，这样事件处理程序认为是元素的方法，事件处理在元素的作用域下运行，this即指向当前元素
 - DOM2事件定义两个方法addEveListener和removeEveListener前者添加监听事件后者移除监听事件。所有DOM节点都包含这两个方法，并且他们都接受三个参数，并且事件程序也是在元素的作用域下运行。可以为该元素添加多个事件处理程序（布尔参数，true是事件捕获阶段调用事件处理程序，false则在事件冒泡阶段调用事件处理程序。默认false冒泡阶段触发）

 **区别** 

 - DOM2可添加多个事件处理程序按照顺序执行。而DOM0只能添加一个事件处理程序，按照顺序执行最后个事件处理程序，其余被覆盖
 - DOM0和DOM2均可移除事件处理程序，DOM0直接赋值null即可，而DOM2只可移除函数声明的方法，匿名函数无法移除

###  attachEvent与addEventListener的区别？

 - attachEvent和datachEvent方法值接收两个参数，且默认冒泡阶段和不能移除匿名函数，this指向widow

	 1. 事件处理类型
	 2. 事件处理方法

 - addEventListener和removeListener方接收三个参数，且默认冒泡阶段和不能移除匿名函数，this指向该元素
	 1. 事件处理类型
	 2. 事件处理方法
	 3. 布尔类型，true是事件捕获阶段调用事件处理程序，false则在事件冒泡阶段调用事件处理程序

**区别**

 - 接受参数数量不同，attachEvent接收两个，addEventListener接收三个
 - 事件处理类型，例如attchEvent的点击为onclick，而addEventListener点击为"click"
 - this指向不同，attachEvent指向window，addEventListener指元素本身

### 解释IE事件冒泡和DOM2事件传播机制？

 - IE事件冒泡：事件是从开始由最具体的元素接收，然后逐级向上传播到父级元素
 - DOM2事件传播机制：DOM2事件规定事件包括三个阶段，事件捕获阶段，处于目标阶段，事件冒泡阶段，首先发生事件捕获阶段，截取事件提供机会从父级元素逐级向下传播，然后实际目标接收事件处于目标阶段，最后事件冒泡阶段开始逐级向上传传播。

### 如何阻止事件冒泡？ 如何阻止默认事件？

 - 标准浏览器： 事件处理程序中会传入一个event对象，这个对象包含了stopPropagation()方法。阻止默认事件是利用preventDefault方法，比如阻止页面跳转。
 - IE：event对象有cancelBubble属性，默认值为false，设置为true来取消事件冒泡。阻止默认事件利用returnValue，默认值是true，设置false取消默认事件

### 有如下代码，要求当点击每一个元素li时控制台展示该元素的文本内容。不考虑兼容
```
<ul class="ct">
    <li>这里是</li>
    <li>饥人谷</li>
    <li>前端6班</li>
</ul>
<script>
var list = document.querySelectorAll('li');
console.log(list);
function handler() {
	alert(this.innerText);
}
for (var i=0; i<list.length; i++) {
	list[i].addEventListener('click', handler, false)
}
</script>
```

### 补全代码，要求：

 - 当点击按钮开头添加时在<li>这里是</li>元素前添加一个新元素，内容为用户输入的非空字符串；当点击结尾添加时在最后一个 li 元素后添加用户输入的非空字符串
 - 当点击每一个元素li时控制台展示该元素的文本内容

```
<ul class="ct">
    <li>这里是</li>
    <li>饥人谷</li>
    <li>任务班</li>
</ul>
<input class="ipt-add-content" placeholder="添加内容"/>
<button id="btn-add-start">开头添加</button>
<button id="btn-add-end">结尾添加</button>
<script>
var ul = document.querySelector('ct');
var addStart = document.querySelector('#btn-add-start');
var addEnd = document.querySelector('#btn-add-end');
var addContent = document.querySelector('.ipt-add-content');
addStart.addEventListener('click', add, false);
addEnd.addEventListener('click', add, false);
ul.addEventListener('click', function(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		console.log(e.target.innerText)
	}
});
function add() {
	var content = addContent.value;
	if (content != '') {
		var newLi = document.createElement('li');
		newLi.innerText = content;
		if (this.id == 'btn-add-end') {
			ul.appendChild(newLi);
		}else if (this.id == 'btn-add-start') {
			ul.insertBefore(newLi, ul.firstChild)
		}
	}else {
		alert('请先输入')
	}
}
</script>
```

### 补全代码，要求：当鼠标放置在li元素上，会在img-preview里展示当前li元素的data-img对应的图片
```
<ul class="ct">
<li data-img="https://imgsa.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=372f4bb77ef40ad101e9cfb136457aba/e4dde71190ef76c69abb87a49816fdfaae5167d7.jpg">鼠标放置查看图片1</li>
<li data-img="https://imgsa.baidu.com/baike/crop%3D0%2C0%2C440%2C292%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=bf7e77eb0c23dd54353cfd28ec399fee/4034970a304e251fe1a7ef77a286c9177e3e53e8.jpg">鼠标放置查看图片2</li>
<li data-img="https://imgsa.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=bf1bf8e31538534398c28f73f27adb1b/c2cec3fdfc0392455cb9ea808294a4c27d1e2534.jpg">鼠标放置查看图片3</li>
</ul>
<div class="img-preview"></div>
<script type="text/javascript">
	var ul = document.getElementsByClassName('ct');
	var preview = document.getElementsByClassName('img-preview');
	var li = document.querySelectorAll('ul li');
	for (var i=0; i<li.length; i++) {
		li[i].addEventListener('mouseover', function(e) {
			var img = document.createElement('img');
			var src = e.target.getAttribute('data-img');
			img.setAttribute('src', src);
			preview[0].appendChild(img);
		})
		li[i].addEventListener('mouseout', function(e) {
			preview[0].innerHTML = '';
		})
	}
</script>
```

###  在 github 上创建个人项目，把视频里事件兼容的函数写法放入项目，在 Readme.md里描述项目(选做题目)
[事件兼容][1]


  [1]: https://github.com/AlyciaHathaway/JStools