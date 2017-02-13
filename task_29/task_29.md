---
title: task_29
---
### 说说库和框架的区别？

 - 库：库提供了方法，即API。当开发者引入了库以后，可以直接掉用并使用这里面的API。可以当做小工具使用。它的体积较小。常见的库有jQuery.js，three.js等
 - 框架：顾名思义，框架就是有一个支撑结构。相当于一个已经构建好的实体房子，而用户只需在这个房子里添加自己想要的家具等。而框架对于开发者，开发者只需在这个框架中添加自己的东西而实现具体的功能。常见的框架有Angular, React等
 - 区别：框架和库比较类似，都是代码的集合，不过框架更加具有针对性，可以说是库的升级版，提供一套完整的代码，而不需要自己重组

###  jQuery 能做什么？

 - jQuery是一个兼容多浏览器的JavaScript库，核心理念是write less，do more，它的语法设计可以使开发更加便捷，例如操作文档对象、选择DOM元素、制作动画效果、事件处理、使用Ajax等。除此之外，jQuery还提供API让开发者编写插件。总之，使用jQuery能使开发者很轻松的开发出功能强大的静态或动态页面

### jQuery 对象和 DOM 原生对象有什么区别？如何转化？

 - 区别：jQuery对象是在DOM原生对象上做了一层包装，只能使用jQuery对象方法，不能使用DOM原生对象方法，同理DOM原生对象也不能使用jQuery对象方法
 - 转换：① jQuery对象转原生JS`var btn = $('#btn')[0];` ②原生JS转jQuery对象`var btn = document.getElementById('btn'); var $btn = $(btn);`

### jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？
```
//绑定事件
$(#btn).on('click',function(){
  //第一个参数是时间类型，第二个参数是一个匿名函数。
})
```
```
//bind，找到指定元素以后，用bind绑定事件到该元素。
$(#btn).bind('click',function(){
  console.log('bind()');
})
```
```
//unbind，unbind的将绑定在给定元素上的事件给解绑。解绑后原先在该元素上的事件就会失效。
$("#btn").unbind();
```
```
//delegate，表示事件的代理。给给定元素绑定事件，基于一个指定的根元素的子集，匹配的元素包括那些目前已经匹配到的元素，也包括那些今后可能匹配到的元素。例如新添加的元素是匹配到的元素，但是用了代理以后，不用给这些新匹配的元素添加事件，而用了代理后它们就已经绑定好了事件。
$('ul').delegate('li', 'click', function() {
  console.log($(this).text());
});
```
```
//live,给匹配到的元素添加事件，现在匹配到的和将来匹配到都添加事件。这种方法是将页面的document元素作为事件代理元素，太消耗资源，已经过时。在新版本中推荐用.on()法，即时在旧版本中，也推荐使用.delegate()方法来取代.live()方法
$('#btn').live('click', function() {
  console.log('clicked');
});
```
```
//on,给匹配的元素绑定事件
$('#btn').on('click', function() {
  console.log('clicked');
});
```
```
//off,给使用on绑定事件的元素移除事件。
$('btn').off();
```
### jQuery 如何展示/隐藏元素？
```
  //hide()和show()方法
<p>我是段落</p>
  <button class="show" type="button">显示</button>
  <button class="hide" type="button">隐藏</button>
<script>
  $(document).ready(function(){
      $('.show').on('click',function(){
      $('p').show();
      });
      $('.hide').on('click',function(){
          $('p').hide();
      });
  })
</script>
```
### jQuery 动画如何使用？
```
  //.animate( properties [, duration ] [, easing ] [, complete ] )
$('#btn').on('click', function() {
  $('.div1').animate({
      width: '200px', // 宽度变为200px
      height: '200px', // 高度变为200px
      left: '100px', // 向左移动
      opacity: '0' // 透明度变化
  }, 1000) // 持续一秒
  animate() {
      // 多个动画
  }; 
});
```
### 如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？
```
//设置和获取元素内部 HTML 内容
$('.div1').html('<p>设置的html内容</p>');//设置内容
$('.div1').html();//获取内容
//text()方法
$('.div1').text('设置的内容');//设置内容
$('.div1').text();//获取内容
```
### 如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？
```
//获取内容使用val();
$('.text1').val(); // 获得id为text1的元素的内容
//设置和获取元素属性
$('.text1').attr('attributeName', 'value');//设置值
$('.text1').attr('attributeName');//获取值
```
### 使用 jQuery实现如下效果
![enter description here][1]

### 使用 jQuery 实现如下效果
![enter description here][2]


  [1]: http://home.jscode.me/uploads/default/original/1X/6fa8fcceae2302be6e3edf5040fe24c44c44c77f.gif
  [2]: http://home.jscode.me/uploads/default/optimized/1X/40ce161fccb9c958ce39bc6caf6b142eec3a1fe8_1_690x498.gif