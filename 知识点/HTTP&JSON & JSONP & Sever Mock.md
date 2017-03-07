---
title: HTTP&JSON & JSONP & Sever Mock
---
### HTTP基础
**概念**

 - sever
 - client
 - request
 - response
 - 浏览器缓存
 - 本地HOSTS
 - DNS

**Request**

 1. 请求行（一行）
 	GET /路径 HTTP1.1
 2. 请求头（多行）
 	Key： Value
 3. 空行（回车）
 4. 请求体（message body）
	随便字符串，在请求头中定义字符串解析类型（Content-Type）

**Response**

 1. 响应行（一行）
	 HTTP/1.1 200（状态码 status code） OK（status message）
 2. 响应头（多行）
	 Key：Value
 3. 空行（回车）
 4. 响应体
	随便字符串

**怎么发一个GET请求**

 1. 地址栏输入网址，回车
 2. `<link rel="stylesheet" href="style.css">`
 3. `<script src="main.js"></script>`
 4. `<img src="1.png">`

**怎么发一个POST请求**

 - `<form action="/pppp" method="post">`form表单的method属性
 
 **GET VS POST**
 
 - 语义不同，GET浏览内容、下载内容，一般生成内容、发布内容要用POST
 - GET+路径（GET一般没有消息体）、POST+路径+消息体
 - 在底层TCP/IP协议，GET只发一个报文，POST发两个

### 搭建一个服务器
![enter description here][1]


### 重点1

 - URL路径和文件没有任何关系
 - 你可以写代码让它们有关系

### 重点2

 - url路径里面的后缀毫无意义
 - 浏览器主要看Content-Type

### 重点3

 - JSON是一种语法

### 重点4

 - JS不一定是静态文件

### 重点5

 - JSONP就是动态JS（callback的约定）

### 重点6

 - HTML / CSS / JS / JSONP 都是字符串而已

### 重点7

 - HTTP就是字符串 / 二进制（人类看不懂的，视频、音频、图像）传来传去

### sever.js
![enter description here][2]

```
var http = require('http');
var fs = require('fs');

var port = process.env.PORT || 8080;

var server = http.createServer(function(request, response) {

	// if (request.url === '/1') {
	// 	response.end('<title>1</title>你请求1干什么？我给你一个随机数' + Math.random())
	// }else if (request.url === '/2') {
	// 	response.end('你很2哎')
	// }else if (request.url === '3.js') {
	// 	response.setHeader('Content-Type', 'application/javascript')
	// 	response.end('var a = 1; alert(a);')
	// }

	var temp = url.parse(request.url, true)
	var path = temp.pathname
	var query = temp.query

	switch (path) {
		case '/index.html':
			var htmlString = fs.readFileSync('./index.html')
			response.setHeader('Content-Type', 'text/html')
			response.end(htmlString)
			break;
		case '/style.css':
			var cssString = fs.readFileSync('./style.css')
			response.setHeader('Content-Type', 'text/css')
			response.end(cssString)
			break;
		case '/main.js':
			// jsonp: callback的值是什么，response传过去的函数名就是什么
			var functionName = query.callback
			response.setHeader('Content-Type', 'application/javascript')
			response.end(functionName + '(1)')
			break;
		case '/data.json':
			response.setHeader('Content-Type', 'application/json')
			response.end('{"name": "frank", "age": 18}')
			break;
		default:
			response.end('404')
			break;
	}
})

sever.listen(port)
console.log('监听成功')
```


  [1]: ./images/%E6%9A%B4%E9%A3%8E%E6%88%AA%E5%9B%BE2017372553533.jpg "暴风截图2017372553533.jpg"
  [2]: ./images/%E6%9A%B4%E9%A3%8E%E6%88%AA%E5%9B%BE20173751938785.jpg "暴风截图20173751938785.jpg"