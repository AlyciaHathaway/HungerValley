
check();
// 然后再执行加载的图片
$(window).on('scroll', check);

//开始的时候先展示几张图片 
function check() {
	// 查找没有被加标识符的
	$('.container img').not('load').each(function() {
		if(isShow($(this))) {
			showImg($(this))
		}
	})
}

function showImg($imgs) {
	$(imgs).each(function() {
		var imgUrl = $(this).attr('data-src');
		$(this).attr('src', imgUrl);
		// 被展示的加上一个标识符
		$(this).addClass('load');
	})
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
