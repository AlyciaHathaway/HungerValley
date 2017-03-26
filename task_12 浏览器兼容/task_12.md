---
title: task_12
---
### 什么是 CSS hack

 - 由于不同厂商的浏览器，比如Internet Explorer,Safari,Mozilla
   Firefox,Chrome等，或者是同一厂商的浏览器的不同版本，如IE6和IE7，对CSS的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。
 - 这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能在不同的浏览器中也能得到我们想要的页面效果。
 - CSS Hack大致有3种表现形式，`CSS属性前缀法`、`选择器前缀法`以及`IE条件注释法`（即HTML头部引用if IE）Hack，实际项目中CSS Hack大部分是针对IE浏览器不同版本之间的表现差异而引入的。

### 谈一谈浏览器兼容的思路

 - 要不要做
	 - 产品的角度（产品的受众、受众的浏览器比例、效果优先还是基本功能优先）
	 - 成本的角度 (有无必要做某件事)
 - 做到什么程度
	 - 让哪些浏览器支持哪些效果
 - 如何做
	 - 根据兼容需求选择技术框架/库(jquery)
	 - 根据兼容需求选择兼容工具(html5shiv.js、respond.js、css
	   reset、normalize.css、Modernizr)
	 - postCSS
	 - 条件注释、CSS Hack、js 能力检测做一些修补

### 列举5种以上浏览器兼容的写法

 1. 条件注释
	```
		<!--[if IE 6]>
		<p>You are using Internet Explorer 6.</p>
		<![endif]-->
		<!--[if !IE]><!-->
		<script>alert(1);</script>
		<!--<![endif]-->
		<!--[if IE 8]>
		<link href="ie8only.css" rel="stylesheet">
		<![endif]-->
	```
 2. IE前缀hack
	```
	.clearfix{
		_color: blue; /*IE6*/
		*zoom:1; /*IE6 IE7*/
		color: red\9; /*IE9*/
	}
	.block{
		display: inline-block; /*IE8以下不支持*/
		*display: inline;
		*zoom: 1;
	}
	```
 3. 厂商前缀
	```
	.shadow {
	-webkit-box-shadow: 0 3px 5px #FFF; /*safari*/
	-moz-box-shadow: 0 3px 5px #FFF; /*火狐*/
	-o-box-shadow: 0 3px 5px #FFF; /*opera*/
	box-shadow: 0 3px 5px #FFF;
	/* 还有一个 -ms- ，对应那些乱七八糟的浏览器 */
	}
	```
 4. 替代写法
	```
	/* IE7之下不支持<a>以外的hover
	div:hover{
		color: red;
	}
	*/
	/*换为:*/
	a:hover{
		color: red;
		display: block;
		/* div 其他属性 */
	}
	```

### 以下工具/名词是做什么的?

 - 条件注释: 区分IE版本以及IE版本的一种兼容办法。一般用来包裹html标签.
 - IE Hack: 针对IE个版本的兼容写法
 - js 能力检测: 针对JS的兼容性的一种方法，检测页面内容，封装函数。
 - html5shiv.js： 针对IE9以下，解决对HTML5标签的支持问题.
 - respond.js: 使得IE678支持媒体查询.
 - css reset: 重置标签默认样式.
 - normalize.css: 相对与css-reset更优化的解决方案，统一标签默认样式，清除一些不需要的样式.
 - Modernizr: 使得老版浏览器支持Html5&CSS3新特性.
 - postCSS: 使用JS转换为CSS

### 一般在哪个网站查询属性兼容性？
[Can I Use][1]
[hack][2]


  [1]: http://caniuse.com/
  [2]: http://browserhacks.com/