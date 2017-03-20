
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

function getSong(channelID) {
    //只有解锁时才能发请求
    if (theLock === false) {
        $.get('http://api.jirengu.com/fm/getSong.php', {
            channel: channelID
        })
            .done(function(songsStr) {
                var severSong = JSON.parse(songsStr).song[0];
                songs.push(severSong);
                play(songs.length - 1);
            })
            .fail(function() {
                console.log('获取歌曲失败')
            })
    }
}


var theLock = false;
function getChannel() {
    //只有解锁时才能发请求
    if(theLock === false) {
        $.get('http://api.jirengu.com/fm/getChannels.php')
            .done(function (channelsStr) {
                var channelsArr = JSON.parse(channelsStr).channels;
                for (var i = 0; i < channelsArr.length; i++) {
                    var channelName = channelsArr[i].name;
                    var channelAttr = channelsArr[i].channel_id;
                    var html = '<li channel-id=\"' + channelAttr + '\">' + channelName + '</li>';
                    $('.channel-list').append(html);
                }
                $('.channels li').first().addClass('list-selected');
                //请求一次后加锁
                theLock = true;
            })
            .fail(function () {
                $('.channel-list').append('<li>获取失败</li>');
            })
    }
}


$('.channels').on('click', function() {
    if ($('.channels ul').hasClass('channel-hide')) {
        getChannel();
        $('.channels ul').removeClass('channel-hide');
        theLock = false;
    }else {
        $('.channels ul').addClass('channel-hide');
        $('.channels ul').empty();
        theLock = false;
    }
});


//【疑惑】为什么需要点击两次才能发起getSong请求？
//把它关了也要重新点两次发请求
//【解决】一开始锁是开着的，但音乐数组没缓存，会发两次请求，第二次锁上了，所以要把theLock放到getSong前面
//【事件冒泡】如果不阻止li冒泡，就会在每一次点击后，列表隐藏并清空
$('.channels ul').on('click', 'li', function() {
    audio.pause();
    $(this).siblings().removeClass('list-selected');
    $(this).addClass('list-selected');
    var channelID = $(this).attr('channel-id');
    event.stopPropagation();
    theLock = false;
    getSong(channelID);
    //图标切换
    if ($('#pause').hasClass('icon-hide')) {
        $('#play').addClass('icon-hide');
        $('#pause').removeClass('icon-hide');
    }
    //唱针动画
    $('#needle').removeClass('needle-play');
    setTimeout(function() {
        $('#needle').addClass('needle-play');
    }, 400);
    console.log(songs.length);
    console.log(channelID);
});




var audio = $('audio').get(0);
var progress = $('progress').get(0);
//当前第几首
var current = 0;

//【疑惑：递归的出口在哪里，这样写会不会爆栈？】
function updateProgress() {
    progress.value = audio.currentTime;
    setTimeout(updateProgress, 1000);
}

function updateTime() {
    var minutes = parseInt(audio.currentTime / 60);
    var seconds = parseInt(audio.currentTime % 60) + '';
        seconds = seconds.length === 2 ? seconds : '0' + seconds;
    $('#current-time').text(minutes + ':' + seconds);
    setTimeout(updateTime, 1000);
}

function fullTime() {
    var minutes = parseInt(audio.duration / 60);
    var seconds = parseInt(audio.duration % 60) + '';
    seconds = seconds.length === 2 ? seconds : '0' + seconds;
    $('#full-time').text(minutes + ':' + seconds);
}

function timeLine() {
    $('progress').on('click', function(e) {
        var percent = e.offsetX / parseInt(getComputedStyle(this).width);
        audio.currentTime = percent * audio.duration;
        progress.value = audio.currentTime;
    });
}

function play(n) {
    // if (n >= songs.length) {
    //     getSong()
    // }
    //
    // if (n < 0) {
    //     n = songs.length - 1
    // }

    if (n>=0 && n<songs.length) {
        var song = songs[n];
        audio.pause();
        audio.src = song.url;
        audio.play();
        current = n;

        audio.addEventListener('playing', function() {
            //value值初始化
            progress.value = 0;
            //duration音频的总长度
            progress.max = audio.duration;

            //进度条更新
            updateProgress();
            //时间更新
            updateTime();
            //总时长更新
            fullTime();
            //时间轴可点击
            timeLine();
            //只有当下一首开始播放时才能解锁
            theLock = false;
        });

        audio.addEventListener('ended', function() {
            play(current + 1);
        });

        $('#title h3').text(songs[current].title);
        $('#title p').text(songs[current].artist);
        $('#cover').css('background', 'url(' + songs[current].picture + ') no-repeat center center');
        $('.active').css('animation-play-state', 'running');
    }else {
        getSong()
    }
}




$('#play').on('click', function() {
    //图标切换
    $('#play').addClass('icon-hide');
    $('#pause').removeClass('icon-hide');
    //唱针动画
    $('#needle').addClass('needle-play');
    //黑胶旋转
    $('.active').css('animation-play-state', 'running');
    //暂停而不是停止
    if (progress.value > 0 && progress.value < progress.max) {
        audio.play()
    }
    //先不考虑单曲循环问题，play的作用就是不断地播放下一首
    if (progress.value === 0) {
        play(current)
    }
    if (progress.value === progress.max && audio.getAttribute('loop') !== loop) {
        play(current + 1)
    }
    //如果单曲循环
    if (audio.getAttribute('loop') === loop) {
        play(current)
    }
});

$('#pause').on('click', function() {
    //图标切换
    $('#play').removeClass('icon-hide');
    $('#pause').addClass('icon-hide');
    //唱针动画
    $('#needle').removeClass('needle-play');
    //黑胶旋转
    $('.active').css('animation-play-state', 'paused');
    audio.pause();
});

$('#prev').on('click', function() {
    //图标切换
    if ($('#pause').hasClass('icon-hide')) {
        $('#play').addClass('icon-hide');
        $('#pause').removeClass('icon-hide');
    }
    //唱针动画
    $('#needle').removeClass('needle-play');
    setTimeout(function() {
        $('#needle').addClass('needle-play');
    }, 400);
    //黑胶动画

    play(current - 1);
    theLock = true;
});

$('#next').on('click', function() {
    //图标切换
    if ($('#pause').hasClass('icon-hide')) {
        $('#play').addClass('icon-hide');
        $('#pause').removeClass('icon-hide');
    }
    //唱针动画
    $('#needle').removeClass('needle-play');
    setTimeout(function() {
        $('#needle').addClass('needle-play');
    }, 400);
    play(current + 1);
    theLock = true;
});

$('#loop').on('click', function() {
    console.log('设置循环');
    audio.setAttribute('loop','loop')
});

$('#like').on('click', function() {
    var likeColor = $(this).attr('style');
    if (likeColor === 'color: #eee') {
        $(this).attr({
            style: 'color: red'
        });
    }else {
        $(this).attr({
            style: 'color: #eee'
        });
    }
});

$('a').on('click', function() {
    $('a').attr({
        href: songs[current].url,
        download: songs[current].title + '.mp3'
    });
    console.log($(this).attr('href'))
    console.log($(this).attr('download'))
})

