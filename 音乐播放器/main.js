
//
// //任何function在执行的时候，都会隐式传入两个参数：this和arguments
//
// var test = function() {
//     console.log(this); //window
//     console.log(arguments); //['a']
// };
// test(a);
// //函数调用方式，this指向全局对象
//
//
// var john = {
//     f: 'john'
// };
// function func() {
//     alert(this.f)
// }
// john.sayHi = func;
// john.sayHi(); //john
// //方法调用方式，this指向调用方
//
//
// function Test() {
//     this.a = a;
//     console.log(this); //{a: 'a'}
// }
// new Test();
// //构造函数调用方式，this将会绑定到新创建的对象
//
//
// function Test() {
//     console.log(this); //{p: 1}
//     this.a = 'a';
// }
// Test.call({p: 1});
// Test.apply({p: 1});
// //call和apply的形式，this绑定到传入的第一个参数

var songs = [{
    url: 'http://116.224.86.33/m10.music.126.net/20170313154931/ff75110e63e0ba6d7f799aa15a77057a/ymusic/f799/9eed/b557/46577dcc2e0ce9c19facff8f6117e559.mp3',
    name: '大鱼',
    singer: '双笙'
}, {
    url: 'http://116.224.86.27/m10.music.126.net/20170313155744/a4c8f641fa577d73e599239cf624aa6c/ymusic/1877/1feb/641e/00de73aa50577a5ebf80c5306402aabc.mp3',
    name: '真言',
    singer: '黛青塔娜'
}, {
    url: 'http://116.224.86.27/m10.music.126.net/20170313155923/3997467702363646f61d83a066cf2090/ymusic/362b/5880/8a80/b27f3f16373ffea1a985c064bbcd63e0.mp3',
    name: 'Dreamer',
    singer: 'Sophie Zelmani'
}];

var audio = $('#audio').get(0);
var progress = $('#progress').get(0);
//当前第几首
var current = 0;
function play(n) {
    if (n >= songs.length) {
        n = 0
    }
    if (n < 0) {
        n = songs.length - 1
    }

    var song = songs[n];
    audio.pause();
    audio.src = song.url;
    audio.play();
    current = n;
    progress.value = 0;

    setTimeout(function() {
        //duration音频的总长度
        progress.max = audio.duration
    }, 100);

    updateProgress()
}

var interval;
//更新进度条
function updateProgress() {
    interval = setInterval(update, 1000);
    function update() {
        //currentTime音频的当前播放位置
        progress.value = audio.currentTime;
    }
}

function stopUpdateProgress() {
    clearInterval(interval);
}

var $pauseButton = $('#pause');
$pauseButton.on('click', function() {
    audio.pause();
    stopUpdateProgress()
});

$('#play').on('click', function() {
    play(current)
});

$('#prev').on('click', function() {
    play(current - 1)
});

$('#next').on('click', function() {
    play(current + 1)
});





