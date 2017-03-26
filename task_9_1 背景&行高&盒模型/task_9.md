---
title: task_9
---
### 盒模型包括哪些属性

 - margin
 - padding
 - border
 - width
 - height

### text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中

 - text-align属性规定元素中的文本的水平对齐方式。该属性通过指定行框与哪个点对齐，从而设置块级元素内文本的水平对齐方式。
 - 作用于块级元素
 - text-align:center是让块级元素中的行内元素或者行内的块元素和文字居中显示。

### 如果遇到一个属性想知道兼容性，在哪查看?
[Can I Use][1]

### IE 盒模型和W3C盒模型有什么区别?
![enter description here][2]

![enter description here][3]

 - 区别：W3C标准中padding、border所占的空间不在width、height范围内，大家俗称的IE的盒模型width包括content尺寸＋padding＋border
 - 并不是所有的IE都使用IE盒模型，早期IE6、IE7使用“IE盒模型”，后来更新了一次，更新后的IE6、IE7使用标准盒模型IE8及以上版本使用标准盒模型
 - 没有DOCTYPE的情况下使用怪异模式，IE也使用“IE盒模型”

### 以下代码的作用？兼容性？

 - 对所有元素应用IE盒模型

```
*{
  box-sizing: border-box;
}
```
![enter description here][4]


  [1]: http://caniuse.com/
  [2]: http://lsly1989.qiniudn.com/201503151.JPG
  [3]: http://lsly1989.qiniudn.com/201503152.JPG
  [4]: ./images/%E6%90%9C%E7%8B%97%E6%88%AA%E5%9B%BE20161227002947.jpg "搜狗截图20161227002947.jpg"