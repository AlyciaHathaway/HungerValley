### 一、样式有几种引入方式? link 和 @import有什么区别

#### 行内引入
> (ฅ>ω<*ฅ) 我是行内样式，直接诞生在元素标签属性中
> `<p style = "color:green;"></p>`

#### 内联引入
> (ฅ>ω<*ฅ) 我是内联样式，位于`<style>`标签中
> `<style>p { color:green; }</style>`

#### link引入
> (ฅ>ω<*ฅ) 我是外部样式，从`<link>`标签引入，和你在同一目录下哦
> `<link rel="stylesheet" type="text/css" href="foo.css" media="all">`
###### 属性
- `rel：relation`，表示关系为`stylesheet`，告诉html我是你的装修工。
- `type：css/text`，描述了使用`link`加载的数据的类型。
- `href`：外部样式表的资源定位符。分为相对路径和绝对路径。
- `media`：表示要应用于需要表现的媒体类型。

#### @import引入
> - 在HTML中：`<style>@import url();</style>`  
> - 在CSS中：直接使用`@import url();` 并且必须在样式表头部最先声明，其后的分号是必需的；IE使用@import无法引入超过35条的样式表。

#### 区别
> - 语法结构
> - 优先级：`link`引入`CSS`时，浏览器会预加载`CSS`，再加载`HTML`；而`@import`则是在页面内容加载完成后再引用，如果网速慢，可能会导致页面的样式混乱。
> - 兼容性：`link`是原生`XHTML`标签，没有兼容问题。而`@import`是CSS2.1提出的，无法兼容老式浏览器。
> - DOM操作：无法干预`@import`样式
> - 网络请求：使用`@import`会减少网络请求

### 二、文件路径../main.css 、./main.css、main.css、/main.css有什么区别

#### 绝对路径
> `<link rel="stylesheet" type="text/css" href="C:Task/CSS/foo.css" media="all">`

#### 相对路径
> `./main.css`和`main.css`代表当前目录  
> `../main.css`上一级目录  
> `/main.css`根目录

### 三、console.log是做什么用的
> `console.log()`用于控制台打印输出，常用于代码debug。如果括号内是`html`文档元素，会以`HTML-tree`的形式返回。

### 四、text-align有几个值，分别有什么作用？为什么text-align:justify没有效果？写截图说明区别
> - text-align：
> 它用来操控块级元素内文本的水平对齐方式，一共5个值
> - inherit：继承，它表示继承父元素样式值。
> - left：默认值
> - right：水平居右
> - center：水平居左
> - justify：两端对齐
> - justify无效是因为一行的文字没有撑满，当一行文字撑满的时候，内容区会均匀分配空间
![0_1481875786033_task_5_1.jpg](http://7xpvnv.com2.z0.glb.qiniucdn.com/9aea849a-dd32-4f3e-8756-dc12f4662182.jpg) 

### 五、px、em、rem分别是什么？有什么区别？如何使用
#### px
> 像素单位，一种绝对值单位，给定文字绝对大小。

#### em
> em的值并不是固定的，em会继承父级元素的字体大小。

#### rem
> rem是CSS3新增的一个相对单位（root em），它是相对html根元素而继承的。  
> 使用rem作为字体单位还有一个妙用：响应式！ 当屏幕大小变化时使用媒体查询，此时只要设置html根元素的大小，就可以使所有文字同时进行响应式缩放。
![0_1481875802605_task_5_2.jpg](http://7xpvnv.com2.z0.glb.qiniucdn.com/76a632a3-04a3-488e-b163-05c1e736c020.jpg) 

### 六、对chrome 审查元素的功能做个简单的截图介绍
![0_1481875815674_task_5_3.jpg](http://7xpvnv.com2.z0.glb.qiniucdn.com/38a9ab0c-2baa-4d21-a0d8-8947817bb46e.jpg)