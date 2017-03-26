---
title: task_8
---
### 块级元素和行内元素分别有哪些？动手测试并列出4条以上的特性区别

 - 块级元素：div、p、h1…h6、table、tr、ul、li、dl、dt、form
 - 行内元素：a、span、img、input、button、em、textarea
 - 块级元素每个占据一整行；可设置宽高；可设置内外边距；可包含任意元素。
 - 行内元素每个占据自身的内容宽度；不可设置宽高；可并排显示；可包含行内元素；可设置内外边距，上下无效，不占据空间，但padding上下背景色会显示。

### 什么是 CSS 继承? 哪些属性能继承，哪些不能？

 - DOM树

![enter description here][1]

> 所以，CSS继承就是指，特定的CSS属性向下传递给子孙元素

 - 不可继承：display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、page-bread-before和unicode-bidi
 - 所有元素可继承：visibility和cursor
 - 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction
 - 块状元素可继承：text-indent和text-align
 - 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image
 - 表格元素可继承：border-collapse

### 如何让块级元素水平居中？如何让行内元素水平居中?

 - 块级元素水平居中`{margin: 0 auto;}`
 - 行内元素水平居中`{text-align: center;}`

### 用 CSS 实现一个三角形
```
<html>
<head>
<style>
.triangle {
	width:			0;
	height:			0;
	border-top:		40px solid red;
	border-right:	40px solid transparent;
	border-bottom:	40px solid blue;
	border-left:	40px solid transparent;
}
</style>
</head>
<body>

<div class="triangle"></div>
</body>
</html>
```
### 单行文本溢出加 ...如何实现?
```
 {
	white-space:	nowrap;
	overflow:		hidden;
	text-overflow:	ellipsis;
}
```
### px, em, rem 有什么区别
**px**
> 像素单位，一种绝对值单位，给定文字绝对大小。

**em**
> em的值并不是固定的，em会继承父级元素的字体大小。

**rem**
> rem是CSS3新增的一个相对单位（root em），它是相对html根元素而继承的。  
> 使用rem作为字体单位还有一个妙用：响应式！ 当屏幕大小变化时使用媒体查询，此时只要设置html根元素的大小，就可以使所有文字同时进行响应式缩放。
![0_1481875802605_task_5_2.jpg](http://7xpvnv.com2.z0.glb.qiniucdn.com/76a632a3-04a3-488e-b163-05c1e736c020.jpg) 
### 解释下面代码的作用?为什么要加引号? 字体里的数字符号代表什么?
`body{ font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif; }`
字体12px，行高1.5，字体样式，因为有空格所以要加引号，数字符号是Unicode编码方式代表宋体。

  [1]: http://www.cnphp.info/wp-content/uploads/2011/09/csstree.png