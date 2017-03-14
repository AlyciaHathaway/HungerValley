
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

var songs = [];

(function getSong() {
    $.get('http://api.jirengu.com/fm/getSong.php')
        .done(function(songsStr) {
            var severSong = JSON.parse(songsStr).song[0];
            songs.push(severSong);
        })
        .fail(function() {
            console.log('获取歌曲失败')
        })
})();

$('.channels').on('click', function getChannel() {
    $.get('http://api.jirengu.com/fm/getChannels.php')
        .done(function(channelsStr) {
            var channelsArr = JSON.parse(channelsStr).channels;
            for (var i=0; i<channelsArr.length; i++) {
                var channelName = channelsArr[i].name;
                var channelID = channelsArr[i].id;
                var html = '<li channel-id=\"' + channelID + '\">' + channelName + '</li>';
                $('.channels').append(html);
            }
            $('.channels li').first().addClass('list-selected');
        })
        .fail(function() {
            $('.channels').append('<li>获取失败</li>');
        })
});

var audio = $('audio').get(0);
var progress = $('progress').get(0);
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
    audio.addEventListener('playing', function() {
        //duration音频的总长度
        progress.max = audio.duration;
    });

    updateProgress();
    currentTime();
    $('.active').css('animation-play-state', 'running');
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

function currentTime() {
    setInterval(time, 1000);
    function time() {
        $('#current-time').text(parseInt(audio.currentTime / 60) +
            ':' + parseInt(audio.currentTime % 60));
    }
}

audio.addEventListener('playing', function() {
    $('#full-time').text(parseInt(audio.duration / 60) +
        ':' + parseInt(audio.duration % 60))
});
// function stopUpdateProgress() {
//     clearInterval(interval);
// }

$('#play').on('click', function() {
    //图标切换
    $(this).addClass('hide');
    $(this).next('#pause').removeClass('hide');
    //唱针动画
    $('#needle').addClass('needle-play');
    //唱片旋转
    $('.active').css('animation-play-state', 'running');
    //暂停而不是停止
    if (progress.value !== 0) {
        audio.play()
    }else {
        play(current)
    }
});

$('#pause').on('click', function() {
    //图标切换
    $(this).addClass('hide');
    $(this).prev('#play').removeClass('hide');
    //唱针动画
    $('#needle').removeClass('needle-play');
    //唱片旋转
    $('.active').css('animation-play-state', 'paused');
    audio.pause();
});

$('#prev').on('click', function() {
    //图标切换
    if ($('#pause').hasClass('hide')) {
        $('#play').addClass('hide');
        $('#pause').removeClass('hide');
    }
    //唱针动画
    $('#needle').removeClass('needle-play');
    setTimeout(function() {
        $('#needle').addClass('needle-play');
    }, 400)
    play(current - 1)
});

$('#next').on('click', function() {
    //图标切换
    if ($('#pause').hasClass('hide')) {
        $('#play').addClass('hide');
        $('#pause').removeClass('hide');
    }
    //唱针动画
    $('#needle').removeClass('needle-play');
    setTimeout(function() {
        $('#needle').addClass('needle-play');
    }, 400)
    play(current + 1)
});

