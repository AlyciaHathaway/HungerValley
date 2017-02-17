---
title: task_30
---
###  jQuery 中， $(document).ready()是什么意思？
当DOM准备就绪时，指定一个函数来执行。

 - JavaScript的window.onload事件是，当页面呈现时用来执行这个事件，直到所有的页面的元素接受完全后，此事件才会被触发，这个过程耗时间比较长
 - 而ready(),表示的是当DOM完全加载后，脚本就开始进行运行了
 - $(document).ready()可以简化为:$(handler)

### $node.html()和$node.text()的区别?

 - 使用$node.html()获取html内容
 - $node.text()获取文本节点内容

```
<div class="test">
hello world
</div>
$(".test").html()
//返回<div class="test">hello world</div>
$(".test").text()
//返回hello world
```
### $.extend 的作用和用法? 

 - $.extend()是用来进行拷贝元素的方式，他可以拷贝一个集合或者json，并且不会影响到原本json的内容

```
var defaualOpts={
name:"hunger",
age:20
};
function People(opts){

  var opt={};
  $.extend(opt,defaulOpts,opts);
  console.log(opts);
}

People({name:"hello"})//return {name:"hello",age:20}
```

 - extend()接受多个值，在函数中，后一个值会覆盖前面的值
 - 只需传入一个参数true就可以实现深拷贝

### jQuery 的链式调用是什么？

 - 链式调用就是分步骤地对jQuery对象实现各种操作
 - 链式调用能大大精简代码量，多项操作一行代码一气呵成，搞定；并且可以优化性能。使用链式调用，所有操作代码共享一个jQuery对象，省去了逐步查询DOM元素的性能损耗

```
$('#test2').animate({left:'50px'},500).animate({top:'50px'},500);
```

###  jQuery 中 data 函数的作用

 - 可以向元素附加数据,以 .data(key,value)或.data(obj) 的形式
 - 也可以从元素上读取数据,以.data(key)或者.data()的形式

### 写出以下功能对应的 jQuery 方法：

 - 给元素 $node 添加 class active，给元素 $noed 删除 class active
```
$node.addClass('active');
$node.removeClass('active');
```
 - 展示元素$node, 隐藏元素$node
```
$node.show();
$node.hide();
```
 - 获取元素$node 的 属性: id、src、title， 修改以上属性
```
//获取
$node.attr('id');
$node.attr('src');
$node.attr('title');
//修改
$node.attr('id','someid');
$node.attr('src','somesrc');
$node.attr('title','sometitle');
```
 - 给$node 添加自定义属性data-src
```
$node.attr('data-src','');
```
 - 在$ct 内部最开头添加元素$node
```
$ct.prepend($node);
```
 - 在$ct 内部最末尾添加元素$node
```
$ct.append($node);
```
 - 删除$node
```
$node.remove();
```
 - 把$ct里内容清空
```
$ct.empty();
```
 - 在$ct 里设置 html
```
$ct.html('<div class="btn"></div>');
```
 - 获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)
```
$node.width()
$node.height()
$node.innerWidth()
$node.innerHeight()
$node.outerWidth()
$node.outerHeight()
$node.outerWidth(true)
$node.outerHeight(true)
```
 - 获取窗口滚动条垂直滚动距离
```
$(window).scrollTop()
```
 - 获取$node 到根节点水平、垂直偏移距离
```
$node.offset()
```
 - 修改$node 的样式，字体颜色设置红色，字体大小设置14px
```
$node.css({'color':'red','font-size':'14px'})
```
 - 遍历节点，把每个节点里面的文本内容重复一遍
```
$node.each(function(){
	console.log($(this).text());	
})
```
 - 从$ct 里查找 class 为 .item的子元素
```
$ct.find('.item')
```
 - 获取$ct 里面的所有孩子
```
$ct.children()
```
 - 对于$node，向上找到 class 为'.ct'的父亲，在从该父亲找到'.panel'的孩子
```
$node.parents('.ct').find('.panel')
```
 - 获取选择元素的数量
```
$node.length;
```
 - 获取当前元素在兄弟中的排行
```
$node.index()
```

### 用jQuery实现以下操作

 - 用jQuery实现以下操作当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色
 - 当窗口滚动时，获取垂直滚动距离
 - 当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色
 - 当鼠标激活 input输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字
 - 当选择 select 后，获取用户选择的内容

### 用 jQuery ajax 实现如下效果。当点击加载更多会加载数据展示到页面

### 实现一个天气预报页面，前端展示自由发挥，数据接口: http://api.jirengu.com/weather.php (选做题目)