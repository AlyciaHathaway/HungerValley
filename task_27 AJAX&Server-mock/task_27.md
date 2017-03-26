---
title: task_27
---
### ajax 是什么？有什么作用？

 - ajax是异步的javascript和xml。传统的从服务器获取数据都是要会刷新页面
	 1. 浏览器向服务端发送请求
	 2. 服务器端获取请求信息后处理请求信息生成response
	 3. 服务器将response发送给浏览器
	 4. 浏览器刷新整个页面显示最新数据
 - ajax利用xmlhttprequest对象脱离浏览器页面向服务器发送请求、加载等单独执行。这就能够不重新加载整个网页的情况下，对部分网页进行更新
**优点**
 - 更新数据而不需要刷新页面： 它能在不刷新整个页面的前提下与服务器通信维护数据，由于ajax是按照需求请求数据，避免发送那些没有改变的数据
 - 异步通信： 它与服务器使用异步的方式通信，不会打断用户的操作（卡死页面）
 - 前后端负载平衡： 可以将后端服务器的一些工作转移给客户端，利用客户端限制的能力来处理，减轻了服务器的负担
 - 数据与呈现分离： 利于分工，降低前后耦合
**缺点**
 - 浏览器历史记录的遗失： 在使用AJAX对页面进行改变后，由于并没有刷新页面，没有改变页面的访问历史，当用户想要回到上一个状态时，无法使用浏览器提供的后退
 - AJAX的安全问题： AJAX的出现就像建立起了一直通服务器的另一条通道，容易遭受到一些攻击

### 前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？

 - 接口：接口名称，统一命名，定制规范
 - 接口传什么：即数据类型的确定以及数据大小等限制的确定
 - 接口的相关参数：服务器、端口、方法、请求数据的一些限制
 
 - 可以自己使用服务器框架搭建一个模拟服务器环境，比如使用express&nodejs或者使用xampp，这里用到的是server-mock，在数据的模拟传输与请求查看上，postman也是好工具

### 点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?
```
var locked = false;
btn.addEventListener('click', function() {
	if (locked) {
		return
	}else {
		locked = true;
		var xhr = new XMLHttpRequest();
		xhr.open();
		xhr.send();
		xhr.readystatechange = function() {
			if (xhr.readyState === 4) {
				locked = false;
			}
		}
	}
})
```
### 封装一个 ajax 函数，能通过如下方式调用。后端在本地使用server-mock来 mock 数据
```
<!DOCTYPE html>
<html>
<body>
	<p id="content"></p>
	<input type="text" id="text">
	<button id="btn">获取</button>
	<script>
		function ajax(opts) {
			var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status) {
					var data;
					if (opts.restype.toLowerCase() == 'text') {
						data = xhr.responseText;
					}else if (opts.restype.toLowerCase() == 'json') {
						data = JSON.parse(xhr.responseText);
					}else if (opts.restype.toLowerCase() == 'xml') {
						data.xhr.responseXML;
					}
					opts.success(data);
				}
			}
			var datastr = '';
			for (var key in opts.data) {
	        	datastr += key + '=' +opts.data[key] + '&'; 
	    	}
	      	datastr = datastr.substr(0,datastr.length - 1);

      		var urlstr = '';
		    if (opts.type == 'get') {
		        urlstr = opts.url + '?' + datastr; 
		        xhr.open(opts.type,urlstr,true);
		        xhr.send();
		    }else if (opts.type == 'post') {
		        xhr.open(opts.type,opts.url,true);
		        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		        xhr.send(datastr);
		    }
	}
	//实例
    var inp = document.querySelector('#text')
    var btn = document.querySelector('#btn');
    btn.addEventListener('click', function(){
    	var inpval = inp.value;
		ajax({
			url:'/getvalue',
			type:'get',
			data:{
			  name: inpval
			},
			restype:'text',
			success:function(data){
				dealData(data)
			},
			error:function(){
				console.log('出错了')
			}
		})
	})

    function dealData(data) {
      //处理返回的数据
		var content = document.querySelector('#content');
		content.innerHTML = data;
    }
	</script>
</body>
</html>
```
```
app.get('/getvalue',function(req,res){
    console.log('有请求来了');
    console.log(req.query);
    if (req.query.name === 'jirengu') {
        res.send('你好 jirengu')
    }else{
        res.send('我不认识你');
    }

})
```
### 实现加载更多的功能，效果范例25，后端在本地使用server-mock来模拟数据
```
  <body>
    <ul id="news">
      <li>内容1</li>
      <li>内容2</li>
      <li>内容3</li>
    </ul>
    <span id="btn">加载更多</span>
    <script>
      function ajax(opts){
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var data;
            if (opts.restype.toLowerCase() == 'text') {
              data = xhr.responseText;
            }else if (opts.restype.toLowerCase() == 'json') {
              data = JSON.parse(xhr.responseText);
            }else if (opts.restype.toLowerCase() == 'xml') {
              data = xhr.responseXML; 
            }
            opts.success(data);
          }
        }
        var datastr = '';
        for (var key in opts.data) {
          datastr += key + '=' +opts.data[key] + '&'; 
        }
        datastr = datastr.substr(0,datastr.length - 1);

        var urlstr = '';
        if (opts.type == 'get') {
          urlstr = opts.url + '?' + datastr; 
          xhr.open(opts.type,urlstr,true);
          xhr.send();
        }else if (opts.type == 'post') {
          xhr.open(opts.type,opts.url,true);
          xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
          xhr.send(datastr);
        }
        
      }

      var btn = document.querySelector('#btn');
   
      var ul = document.querySelector('#news');
      //设置全局锁
      var ajaxLock = false;
    
      btn.addEventListener('click', function(){
        //如果ajaxLock = true 即在还有数据在请求，这一次请求就return什么也不做
        if (ajaxLock) {
          return
        }
        var index = document.querySelector('#news').children.length ;
        ajax({
          url:'/getnews',
          type:'get',
          data:{
            'num': index
          },
          restype:'json',
          success:function(data){
            dealData(data)
            //当数据已经接收完后解锁
            ajaxLock = false;
          },
          error:function() {
            console.log('出错了')
          }
        })
        //上锁
        ajaxLock = true;
      })

      function dealData(data) {
        for (var key in data) {
          var li = document.createElement('li');
          li.innerHTML = data[key];
          ul.appendChild(li);
        }
      }
    </script>
  </body>
</html>
```
```
app.get('/getnews',function(req,res){
    console.log('收到消息');
    var ind = parseInt(req.query.num) + 1;
    var data = [];
    for (var i = ind; i<(4+ind); i++) {
        var str = '内容' + i;
        data.push(str);
    }
    res.send(data);
})
```