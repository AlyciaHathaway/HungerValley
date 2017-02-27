---
title: task_35
---
**this 相关问题**
### apply、call 有什么作用，什么区别

### 以下代码输出什么?
```
var john = { 
  firstName: "John" 
}
function func() { 
  alert(this.firstName + ": hi!")
}
john.sayHi = func
john.sayHi()
```

### 下面代码输出什么，为什么
```
func() 
function func() { 
  alert(this)
}
```

### 下面代码输出什么
```
document.addEventListener('click', function(e){
    console.log(this);
    setTimeout(function(){
        console.log(this);
    }, 200);
}, false);
```

### 下面代码输出什么，why
```
var john = { 
  firstName: "John" 
}

function func() { 
  alert( this.firstName )
}
func.call(john)
```

###  以下代码有什么问题，如何修改
```
var module= {
  bind: function(){
    $btn.on('click', function(){
      console.log(this) //this指什么
      this.showMsg();
    })
  },
  
  showMsg: function(){
    console.log('饥人谷');
  }
}
```