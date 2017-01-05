---
title: task_9_2
---
### text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中

 - text-align属性规定元素中的文本的水平对齐方式。该属性通过指定行框与哪个点对齐，从而设置块级元素内文本的水平对齐方式。
 - 作用于块级元素
 - text-align:center是让块级元素中的行内元素或者行内的块元素和文字居中显示。

### IE 盒模型和W3C盒模型有什么区别?
![enter description here][1]

![enter description here][2]
 - 区别：W3C标准中padding、border所占的空间不在width、height范围内，大家俗称的IE的盒模型width包括content尺寸＋padding＋border
 - 并不是所有的IE都使用IE盒模型，早期IE6、IE7使用“IE盒模型”，后来更新了一次，更新后的IE6、IE7使用标准盒模型IE8及以上版本使用标准盒模型
 - 没有DOCTYPE的情况下使用怪异模式，IE也使用“IE盒模型”

### `*{ box-sizing: border-box;}`的作用是什么？
 - 对所有元素应用IE盒模型

### line-height: 2和line-height: 200%有什么区别?

 - 2相对于自身字体大小设置2倍行高
 - 200%相当于em，继承自父元素设置2倍行高

### inline-block有什么特性？如何去除缝隙？高度不一样的inline-block元素如何顶端对齐?

 - 兼具inline和block两者特性。不占据一整行，宽度由内容宽度决定；可设置宽高，内外边距
 - 设置父元素font-size为0，子元素重新设置字体
 - vertical-align: top

### CSS sprite 是什么?

 - CSS sprite称精灵图或雪碧图，是把多个icon、图片放在一张图片中，通过定位选择需要显示的icon，好处是减少网络请求，提高加载速度。

### 让一个元素"看不见"有几种方式？有什么区别?

 - display:none; 在文档流中消失
 - opacity: 0; 元素透明，但是仍在文档流中
 - visibility:hidden; 同opacity
 - position值足够大定位到屏幕以外
 - z-index 设置层叠上下文让其他元素覆盖
 - and so on还有很多

  [1]: http://lsly1989.qiniudn.com/201503151.JPG
  [2]: http://lsly1989.qiniudn.com/201503152.JPG