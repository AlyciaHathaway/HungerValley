---
title: CSS查漏补缺
---
### npm国内镜像源

 - `npm config set registry https://registry.npm.taobao.org/`

### 测试兼容性网站
[Can I use][1]

### a链接
 - 设置颜色样式时要直接选中a对它设置，a链接颜色不会继承，字体可以

### 自定义一个元素为button样式
```
.button {
	display:			inline-block;
	height:				30px;
	line-height:		30px;
	text-align:			center;
	background-color:	green;
	padding:			0 12px;
	color:				#fff;
	border-radius:		3px;
	text-decoration:	none;
	cursor:				pointer;
} 
```

### table

  - 现在很少有这种布局，一是SEO不好，二是布局不方便，它的作用仅限于表格。
  - border-collapse: collapse。
  - 表格的内容默认垂直居中，所以把图片设置表格渲染会垂直居中
  - vertical-align:		middle;只能在表格里面用
  	```
	img {
	width:				200px;
	height:				200px;
	background-color:	#ccc;
	display:			table-cell;
	vertical-align:		middle;
	text-align:			center;
	}
	```
### E:first-child和E:first-of-type
 - E:first-child 的计算规则是E是上一父级（非上上）的子元素，并且是【第一个】出现，然后选中第一个
 - E:first-of-type 的计算规则是E是上一父级（非上上）的子元素，并且是【第一次】出现，然后选中第一个

![enter description here][2]

### 边框实现三角形
```
.tri {
			width:			0;
			height:			0;
			border-top:		40px solid blue;
			border-right:	40px solid yellow;
			border-bottom:	40px solid green;
			border-left:	40px solid red;
		}
```

### 单行文本溢出
```
	{
			white-space:		nowrap;
			overflow:			hidden;
			text-overflow:		ellipsis;
		}
```

  [1]: http://caniuse.com/
  [2]: ./images/QQ%E6%88%AA%E5%9B%BE20161226204239.jpg "QQ截图20161226204239.jpg"