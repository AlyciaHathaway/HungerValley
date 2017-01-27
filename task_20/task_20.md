---
title: task_20
---
### 使用数组拼接出如下字符串

 - 直接拼接
	```
	var prod = {
		name: '女装',
		styles: ['短款', '冬季', '春装']
	};
	function getTp1(data) {
		return '<dl class="product">' + '\n'
				+'\t<dt>' + data.name + '</dt>\n'
				+'\t<dd>' + data.styles[0] + '</dd>\n'
				+'\t<dd>' + data.styles[1] + '</dd>\n'
				+'\t<dd>' + data.styles[2] + '</dd>\n'
				+'</dl>'
	}
	var result = getTp1(prod);
	```
 - 储存为数组转为字符串
	```
	function getTp2(data) {
		var arr = [];
		arr.push('<dl class="product">' + '\n');
		arr.push('\t<dt>' + data.name + '</dt>\n');
		for(var key in data.styles){
			if(data.styles.hasOwnProperty(key)) {
				arr.push('\t<dd>' + data.styles[key] + '</dd>\n');
			}
		arr.push('</dl>');
		return arr.join('');
		}
	}

	var result2 = getTp1(prod);
	```

### 写出两种以上声明多行字符串的方法

 - 反斜杠多行声明（输出单行）
	```
	var longString = "Long \
	long \
	long \
	string";

	longString
	// "Long long long string"
	```

 - 连接运算符（输出单行）
	```
	var longString = 'Long '
	  + 'long '
	  + 'long '
	  + 'string';

	longString
	// "Long long long string"
	```

 - 多行注释（输出多行）
	```
	(function () { /*
	line 1
	line 2
	line 3
	*/}).toString().split('\n').slice(1, -1).join('\n')
	// "line 1
	// line 2
	// line 3"
	```

### 补全如下代码,让输出结果为字符串: hello\\饥人谷

	```
	var str = 'hello\\\\饥人谷';
	consoloe.log(str);
	```

### 代码输出

	```
	var str = 'jirengu\nruoyu'
	console.log(str.length)//13，\n转义占用一个字符
	```

### 写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是

	```
	var str1 = "abcdcba";
	var str2 = "abcdcbb";
	function judge(str) {
		var obj = str.split('').reverse().join('');
		if(obj === str) {
			console.log(true);
		}else{
			console.log(false);
		}
	}
	```