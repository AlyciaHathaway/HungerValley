---
title: task_10
---
### 浮动元素有什么特征？对父容器、其他浮动元素、普通元素、文字分别有什么影响?

 - 脱离文档流，直到碰触到父容器
 - 父容器高度塌陷
 - 浮动元素跟随，直到碰触到上一个浮动容器的边框
 - 普通元素被覆盖
 - 文字环绕

### 清除浮动指什么? 如何清除浮动? 两种以上方法

 - 解决父容器高度塌陷问题
 - clear: both
 - BFC

### 有几种定位方式，分别是如何实现定位的，参考点是什么，使用场景是什么？

|  值   |   属性  |
| --- | --- |
| inherit |  规定应该从父元素继承 position 属性的值 |
| static | 默认值,没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明） |
| relative | 生成相对定位的元素，相对于元素本身正常位置进行定位,因此，left:20px 会向元素的 left 位置添加20px |
| absolute | 生成绝对定位的元素，相对于static定位以外的第一个祖先元素（offset parent）进行定位,元素的位置通过 left, top, right 以及 bottom 属性进行规定 |
|fixed | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 left, top, right 以及 bottom 属性进行规定 |
| sticky | CSS3新属性，表现类似position:relative和position:fixed的合体，在目标区域在屏幕中可见时，它的行为就像position:relative; 而当页面滚动超出目标区域时，它的表现就像position:fixed，它会固定在目标位置 |

### z-index 有什么作用? 如何使用?

 - z-index属性控制元素叠放顺序，z-index越高，元素位置越靠上。

### position:relative和负margin都可以使元素位置发生偏移，二者有什么区别

 - relative位移对其他元素没有影响，元素依然在普通文档流中
 - 负margin元素脱离了原来的位置发生位移，

### BFC 是什么？如何生成 BFC？BFC 有什么作用？举例说明

 - BFC块级格式化上下文
 - float为 left|right
	overflow为 hidden|auto|scroll
	display为 table-cell|table-caption|inline-block
	position为 absolute|fixed
 - BFC会阻止垂直外边距（margin-top、margin-bottom）折叠
	- 按照BFC的定义，只有同属于一个BFC时，两个元素才有可能发生垂直Margin的重叠，这个包括相邻元素，嵌套元素，只要他们之间没有阻挡(例如边框，非空内容，padding等)就会发生margin重叠。
 - BFC不会重叠浮动元素
 - BFC可以包含浮动

### 在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例

 - 相邻的兄弟元素
 - 父级和第一个/最后一个子元素
 - 空的block元素