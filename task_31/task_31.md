---
title: task_31
---
### 如何判断一个元素是否出现在窗口可视范围（浏览器的上边缘和下边缘之间，肉眼可视）。写一个函数 isVisible实现
```
function isShow($node) {
	var windowHeight = $(window).height(),
		scrollTop = $(window).scrollTop(),
		offsetTop = $node.offset().top,
		nodeHeight = $node.height();
	if (windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight) {
		return true;
	}else {
		return false;
	}
}
```
### 当窗口滚动时，判断一个元素是不是出现在窗口可视范围。每次出现都在控制台打印 true 。用代码实现
```
$(window).on('scroll', function() {
	if (isShow($('.hello'))) {
		console.log(true);
	}
})
function isShow($node) {
	var windowHeight = $(window).height(),
		scrollTop = $(window).scrollTop(),
		offsetTop = $node.offset().top,
		nodeHeight = $node.height();
	if (windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight) {
		return true;
	}else {
		return false;
	}
}
```
### 当窗口滚动时，判断一个元素是不是出现在窗口可视范围。在元素第一次出现时在控制台打印 true，以后再次出现不做任何处理。用代码实现
```
$(window).on('scroll', function() {
	if (isVisible($node) && !$node.hasClass('show')) {
		console.log(true);
		$node.addClass('show')
	}
})
function isShow($node) {
	var windowHeight = $(window).height(),
		scrollTop = $(window).scrollTop(),
		offsetTop = $node.offset().top,
		nodeHeight = $node.height();
	if (windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight) {
		return true;
	}else {
		return false;
	}
}
```
### 图片懒加载的原理是什么？

 - 图片并不在打开页面时就全部加载，把图片真实的地址放在自定义属性data-src中，在图片可见的时候再开始加载

### 实现视频中的图片懒加载效果
[懒加载][1]
### 实现视频中的新闻懒加载效果
```
var pageIndex = 0;
var isOver = false;
var isNewsArrive = true;
getNews();
// 当页面滚动时，获取新闻，把新闻加载
$(window).on('scroll', checkNews)

function checkNews() {
	if(isShow($('.load-more')) && !isOver && isNewsArrive) {
	getNews();	
	}
}
function getNews() {
	isNewsArrive = false;
	$.get('/getNews', {page: pageIndex}).done(function(ret) {
		isNewsArrive = true;

		if(ret.status === 0) {
			pageIndex++;
			appendHtml(ret.data);
			checkNews();
		}else{
			alert('获取新闻出错')
		}
	}).fail(function() {
		alert('系统异常')
	})
}

function appendHtml(news) {
	if(news.length === 0) {
		$('.load-more').remove();
		$('.container').append('<p>没有更多数据了</p>');
		return;
	}
	var htmls = '';
	$.each(news, function() {
		htmls += '<li class="item">';
		htmls += '<a href="' + this.link + '">';
		htmls += '<div class="thumb"> <img src="' + this.img + '"></div>';
		htmls += '<h2>'	+ this.title + '</h2>';
		htmls += '<p>' + this.brif + '</p>';
		htmls += '</a></li>';
	})

	$('.news').append(htmls);
}

function isShow($node) {
	var windowHeight = $(window).height(),
		scrollTop = $(window).scrollTop(),
		offsetTop = $node.offset().top,
		nodeHeight = $node.height();
	if (windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight) {
		return true;
	}else {
		return false;
	}
}
```


  [1]: http://js.jirengu.com/fabe/1/edit?html,output