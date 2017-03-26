---
title: task_28
---
### 什么是同源策略

 - 在浏览器中出于对安全的考虑。只允许本域下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读取对方的资源
 - 同源指的是协议、域名、端口都必须一致。只要其中一个不一致都不是同源

### 什么是跨域？跨域有几种实现形式

 - 跨域即是指允许不同域的接口进行交互资源
	 1. jsonp ，利用src属性
	 2. CORS cross-origin-resource-shareing //iE10及以上支持
	 3. 降域 但是具有局限性，只有是同属于一个域名的二级域名还能够使用这种方式
	 4. postMessage

### JSONP 的原理是什么

 - jsonp的原理是利用src属性，因为src属性可以获取不同域下的资源。并且获取过来的资源是直接当作js代码进行执行的。所以只需要让后端返回的数据是一个函数调用，并且处理后的数据作为函数的参数传入。
	- 前端通过script标签的src来请求资源，并且传入一个回调函数参数。在前端定义好回调函数
	- 在后端获取回调函数名称并且对函数名称与返回数据进行拼接成为函数调用的形式，再返回，就可以实现jsonp了

### CORS是什么

 - 前端使用XMLHttpRequest跨域访问时，浏览器会在请求头中添加：origin。后端设置Access-Control-Allow-Origin值，来规定哪些是可以访问资源的。浏览器则判断该响应头中Access-Control-Allow-Origin的值是否包含 Origin 的值，如果有则浏览器会处理响应，我们就可以拿到响应数据，如果不包含浏览器直接驳回，这时我们无法拿到响应数据。

### 根据视频里的讲解演示三种以上跨域的解决方式

[JSONP][1]

[CORS][2]

[降域][3]

 - 对于主域相同而子域不同的例子，可以通过设置document.domain的办法来解决。具体的做法是可以在`a.kuayu.com/a.html`和`hb.kuayu.com/b.html`两个文件中分别加上`document.domain = ‘kuayu.com’`；然后通过a.html文件中创建一个iframe，去控制iframe的contentDocument，这样两个js文件之间就可以“交互”了。当然这种办法只能解决主域相同而二级域名不同的情况，如果你异想天开的把script.a.com的domian设为alibaba.com那显然是会报错的。
 - 缺点：
1、安全性，当一个站点（`a.kuayu.com`）被攻击后，另一个站点（`b.kuayu.com`）会引起安全漏洞。
2、如果一个页面中引入多个iframe，要想能够操作所有iframe，必须都得设置相同domain。

[PostMessage][4]

通常用于解决以下页面之间的跨域数据传输：
(1)、页面和其打开的新窗口的数据传递
(2)、多窗口之间消息传递
(3)、页面与嵌套的iframe消息传递
postMessage(data,origin)方法接受两个参数:

 - data:要传递的数据，html5规范中提到该参数可以是JavaScript的任意基本类型或可复制的对象，然而并不是所有浏览器都做到了这点儿，部分浏览器只能处理字符串参数，所以我们在传递参数的时候需要使用JSON.stringify()方法对对象参数序列化，在低版本IE中引用json2.js可以实现类似效果。
 - origin：字符串参数，指明目标窗口的源，协议+主机+端口号[+URL]，URL会被忽略，所以可以不写，这个参数是为了安全考虑，postMessage()方法只会将message传递给指定窗口，当然如果愿意也可以建参数设置为"*"，这样可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。

  [1]: https://github.com/AlyciaHathaway/HungerValley/tree/master/task_28/JSONP
  [2]: https://github.com/AlyciaHathaway/HungerValley/tree/master/task_28/CORS
  [3]: https://github.com/AlyciaHathaway/HungerValley/tree/master/task_28/%E9%99%8D%E5%9F%9F
  [4]: https://github.com/AlyciaHathaway/HungerValley/tree/master/task_28/PostMessage