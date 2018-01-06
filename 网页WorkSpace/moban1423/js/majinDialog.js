$.dialog = function(args){
	var name = "animated "+getAnimationIn();
	var $dialog = $("<div class='dialogBox "+name+"'>"+
		"<div class='title'>"+
			"<div class='titleText'>"+args.title+"</div>"+
			"<div class='closeBtnBox'><a href='javascript:;' class='closeBtn'>X</a></div>"+
		"</div>"+
		"<div class='content'>"+
			"<div class='wrap'>"+
				"<span class='icon'></span>"+
				"<span class='text'>"+args.content+"</span>"+
			"</div>"+
			"<div class='buttons'>"+
				"<input class='sure' type='button' value='确定'/>"+
				"<input class='close' type='button' value='取消'/>"+
			"</div>"+
		"</div>"+
	"</div>");
	$("body").append($dialog).append("<div class='gray'></div>");
	//窗口居中
	AutoCenter($dialog);
	//动态改变位置
	$(window).resize(function(){
		AutoCenter($dialog)
	});
	//窗体事件
	InitEvent($dialog,args);
}
/*窗口居中*/
function AutoCenter($dialog){
	var w = $dialog.width();
	var h = $dialog.height();
	var l = $(window).width() - w;
	var t = $(window).height() - h;
	$dialog.css({left:l/2+"px",top:t/2+"px"});
}
/*窗体事件*/
function InitEvent($dialog,args){
	/*窗体拖动*/
	$dialog.find(".title").mousedown(function(e){
		var ev = e || window.event;
		var _left = ev.clientX - $(this).parent().offset().left;
		var _top = ev.clientY - $(this).parent().offset().top;

		var move = true;
		$(document).mousemove(function(e){
			if(!move){
				return;
			}
			var ev = e || window.event;
			var x = ev.clientX-_left;
			var y = ev.clientY-_top;
			/*$dialog.find(".title").css({cursor:move});*/
			$dialog.css({left:x,top:y});
		});
		$(document).mouseup(function(){
			move = false;
		})
	})
	/*关闭按钮*/
	$dialog.find(".closeBtn").click(function(){
		$(".gray").remove();
		$dialog.addClass(getAnimationOut());
		$dialog.fadeOut(500,function(){
			$(this).remove();
		});
	});
	/*取消按钮*/
	$dialog.find(".close").click(function(){
		$(".gray").remove();
		$dialog.addClass(getAnimationOut());
		$dialog.fadeOut(500,function(){
			$(this).remove();
		});
		if(args.callback){
			args.callback(false);
		}
	});
	/*确定按钮*/
	$dialog.find(".sure").click(function(){
		$(".gray").remove();
		$dialog.addClass(getAnimationOut());
		$dialog.fadeOut(500,function(){
			$(this).remove();
		});
		if(args.callback){
			args.callback(true);
		}
	});
}

/*添加动画*/
function getAnimationIn(){
	var animations = [];
	animations.push("bounceInLeft");
	animations.push("bounceInUp");
	animations.push("bounceInRight");
	animations.push("bounceIn");
	animations.push("bounceInDown");
/*
	animations.push("fadeIn");
	animations.push("fadeInDown");
	animations.push("fadeInDownBig");
	animations.push("fadeInLeft");
	animations.push("fadeInLeftBig");
	animations.push("fadeInRight");
	animations.push("fadeInRightBig");
	animations.push("fadeInUp");
	animations.push("fadeInUpBig");
	animations.push("rotateInDownLeft");
	animations.push("rotateInDownRight");
	animations.push("rotateInUpLeft");
	animations.push("rotateInUpRight");
	animations.push("slideInUp");
	animations.push("slideInDown");
	animations.push("slideInLeft");
	animations.push("slideInRight");
*/
	var rand_index = Math.floor(Math.random()*animations.length);
	return animations[rand_index];

}
function getAnimationOut(){
	var animations = [];
	animations.push("bounceOutLeft");
	animations.push("bounceOutUp");
	animations.push("bounceOutRight");
	animations.push("bounceOut");
	animations.push("bounceOutDown");
	var rand_index = Math.floor(Math.random()*animations.length);
	return animations[rand_index];

}