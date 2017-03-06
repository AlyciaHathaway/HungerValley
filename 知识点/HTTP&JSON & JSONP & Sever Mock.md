---
title: HTTP&JSON & JSONP & Sever Mock
---
### HTTP

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
 2. `<link href="style.css">`
 3. `<script src="main.js"></script>`
 4. `<img src="1.png">`

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