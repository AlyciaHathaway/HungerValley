---
title: task_7
---
### class 和 id 的使用场景?

 - ID定位到页面上唯一的元素（独一无二）
 - Class定位到页面上某一类的元素（共同特征）

### CSS选择器常见的有几种?
 1. 基础选择器
 2. 组合选择器
 3. 属性选择器
 4. 伪类选择器
 5. 伪元素选择器

### 选择器的优先级是怎样的?对于复杂场景如何计算优先级？
**从上到下，优先级越来越低**
 - 在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式
 - 作为style属性写在元素标签上的内联样式
 - id选择器
 - 类选择器
 - 伪类选择器
 - 属性选择器
 - 标签选择器
 - 通配符选择器
 - 浏览器自定义
 
 **复杂场景计算权重**
 
 - 如果权重不同，则大的优先级高。比如：标签选择器权值10000，id选择器的权值为1000，class选择器为100，标签选择器为10。
 - 如果权重相同，则后来者居上
 
### a:link, a:hover, a:active, a:visited 的顺序是怎样的？ 为什么？

 - a:link > a:visited > a:hover > a:active从左到右依次设置样式
 - 样式会产生覆盖，不按顺序则不能正确显示

### 以下选择器分别是什么意思?

 - #header{ } id为header的元素
 - .header{ } class为header的元素
 - .header .logo{ } class为header 子元素中 class为logo的元素
 - .header.mobile{ } class为header的元素中的class为mobile的元素
 - .header p, .header h3{ } class为header元素中的p标签和h3标签
 - #header .nav>li{ } id为header的class为nav元素的直接子元素为li的标签
 - #header a:hover{ } id为header元素中的a标签的hover状态
 - #header .logo~p{ } id为header下 class为logo标签之后所有的p标签
 - #header input[type="text"]{ } 属性为text的标签

### 列出你知道的伪类选择器

| 选择器 | 含义 ||
| :---: | :---: | :---: |
| E:first-child | 匹配元素E的第一个子元素 |
| E:link | 匹配所有未被点击的链接 |
| E:visited | 匹配所有已被点击的链接 |
| E:active | 匹配鼠标已经其上按下、还没有释放的E元素 |
| E:hover | 匹配鼠标悬停其上的E元素 |
| E:focus | 匹配获得当前焦点的E元素 |
| E:lang(c) | 匹配lang属性等于c的E元素 |
| E:enabled | 匹配表单中可用的元素 |
| E:disabled | 匹配表单中禁用的元素 |
| E:checked | 匹配表单中被选中的radio或checkbox元素 |
| E::selection | 匹配用户当前选中的元素 |
| E:root | 匹配文档的根元素，对于HTML文档，就是HTML元素 |
| E:nth-child(n) | 匹配其父元素的第n个子元素，第一个编号为1 |
| E:nth-last-child(n) | 匹配其父元素的倒数第n个子元素，第一个编号为1 |
| E:nth-of-type(n) | 与:nth-child()作用类似，但是仅匹配使用同种标签的元素 |
| E:nth-last-of-type(n) | 与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素 |
| E:last-child | 匹配父元素的最后一个子元素，等同于:nth-last-child(1) |
| E:first-of-type | 匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1) |
| E:last-of-type | 匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1) |
| E:only-child | 匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 :nth-child(1):nth-last-child(1) |
| E:only-of-type | 	匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1) |
| E:empty | 匹配一个不包含任何子元素的元素，文本节点也被看作子元素 |
| E:not(selector) | 匹配不符合当前选择器的任何元素 |

### div:first-child和div:first-of-type的作用和区别

 - first-child	匹配元素E的第一个子元素
 - first-of-type	匹配父元素下使用同种标签的第一个子元素
 - 区别： 
	1. E：first-child要使该属性生效，E元素必须是某个元素的第一个子元素，前面一旦有遮挡就会失效。
	2. E：first-of-type则总是能命中父元素的第1个为E的子元素，不论第1个子元素是否为E。顾名思义，type，如果使用类名，则会选择每个归属同一类的不同标签的第一个子元素（如下一题的例子）


### 运行如下代码，解析下输出样式的原因
```
<style>
.item1:first-child{
  color: red;
}
.item1:first-of-type{
  background: blue;
}
</style>
<div class="ct">
   <p class="item1">aa</p>
   <!-- 字体红色 原因：它是父元素第一个子元素-->
   <!-- 背景蓝色， 原因： first-of-type <p>标签下的第一个子元素 -->
   <h3 class="item1">bb</h3>
   <!-- 背景蓝色， 原因：  first-of-type <h3>标签下的第一个子元素 -->
   <h3 class="item1">ccc</h3>
</div>
```