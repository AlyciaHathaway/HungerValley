---
title: task_22
---
### \d，\w,\s,[a-zA-Z0-9],\b,.,*,+,?,x{3},^$分别是什么?

 - \d :0-9的数字
 - \w :0-9的数字和a-z,A-Z的字母和下划线
 - \s :空白字符
 - `[a-zA-Z0-9]`: 0-9的数字和a-z,A-Z的字母和下划线
 - \b: 单词边界
 - .: 除换行符外的任意字符
 - `*`: 是一种量词代表0次或多次即任意多次 {0,}
 - +：是一次或多次 {1,}
 - ?: 出现0次或1次 {0,1}
 - x{3}: 表示x出现3次
 - ^ 开头或取反
 - $: 结尾

### 写一个函数trim(str)，去除字符串两边的空白字符
```
function trim(str) {
	return str.replace(/^\s+|\s+$/g, '');
}
```
###  写一个函数isEmail(str)，判断用户输入的是不是邮箱
```
function isEmail(str) {
	var reg = /^\w+@.+$/;
	return reg.test(str);
}
```
### 写一个函数isPhoneNum(str)，判断用户输入的是不是手机号
```
function isPhoneNumber(str) {
	return /^1\d{10}$/.test(str);
}
```
### 写一个函数isValidUsername(str)，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）
```
function isValidUsername(str) {
	var reg = /^\w{6,20}$/;
	return reg.test(str);
}
```
### 写一个函数isValidPassword(str), 判断用户输入的是不是合法密码（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少至少包括两种）
```
function isValidPassword(str) {
	if(!/^\w{6,20}$/.test(str)) return false
	if(/^\d{6,20}$/.test(str)) return false
	if(/^[A-Z]{6,20}$/.test(str)) return false
	if(/^[a-z]{6,20}$/.test(str)) return false
	if(/^_{6,20}$/.test(str)) return false

	return true;
}
```
### 写一个正则表达式，得到如下字符串里所有的颜色
```
var re = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})(?=;)/g.test(str);
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee "
console.log( subj.match(re) )  // ['#121212', '#AA00ef']
```
### 下面代码输出什么? 为什么? 改写代码，让其输出['hunger', 'world']
```
var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"/g;
str.match(pat); //输出[""hunger" , hello "world""]
//因为默认情况下匹配是在贪婪模式下面，这里就是尽可能多的匹配""的字符。只要改为非贪婪模式就可以达到效果，方法是在量词后面加上?
//var pat = /".*?"/g
```