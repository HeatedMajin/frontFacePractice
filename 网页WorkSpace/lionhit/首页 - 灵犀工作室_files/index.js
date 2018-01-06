$(document).ready(function(){

	$('#slider').nivoSlider();
	
	var ban_sl=$('#slider .nivo-controlNav .nivo-control').size();
	var ban_kd=(977-(ban_sl-1)*3)/ban_sl;
	$('#slider .nivo-controlNav a').css("width",ban_kd);
	$('#slider .nivo-controlNav .nivo-control:last').css("margin-right","0");
	
	$sz = $(".i_server_m ul li");
	$sz.mouseenter(function () {
		var obj=$(this).find(".server_img img");
		var y_img=$(obj).attr("src");
		var h_img=$(obj).attr("src0");
		$(obj).attr("src",h_img);
		$(obj).attr("src0",y_img);
		var obj1=$(this).find(".server_text a");
		$(obj1).addClass("hov");
	});
	$sz.mouseleave(function () {
		var obj=$(this).find(".server_img img");
		var y_img=$(obj).attr("src");
		var h_img=$(obj).attr("src0");
		$(obj).attr("src",h_img);
		$(obj).attr("src0",y_img);
		var obj1=$(this).find(".server_text a");
		$(obj1).removeClass("hov");
	});


	var hzhbsl = $(".hzhb_m .subBox ul > li").size();
	if(hzhbsl<7){
		var xhnr="";
		var xhnr1 = $(".hzhb_m .subBox ul").html();
		var xhz = Math.ceil(7/hzhbsl);
		for (var i=0;i<xhz;i++){
			xhnr=xhnr+xhnr1;
		}
		$(".hzhb_m .subBox ul").html(xhnr);
	}
	var left = $("#left");
	var right = $("#right");
	var obj = $(".subBox ul");
	var w = obj.find("li").innerWidth();
	
	left.click(function(){
		obj.find("li:last").prependTo(obj);
		obj.css("margin-left",-w);
		obj.animate({"margin-left": 0});
	});
	
	right.click(function(){
		obj.animate({"margin-left": -w},function(){
			obj.find("li:first").appendTo(obj);
			obj.css("margin-left","0");
		});
	});
	
	var moving = setInterval(function(){right.click()},2000);
	
	$(".hzhb_m .scrollcon").hover(function(){
		clearInterval(moving);
	},function(){
		moving = setInterval(function(){right.click()},2000);
	});
	
	
	$(".sy_dh p").each(function() {
		var dhkgd = (52-$(this).height())/2;
		$(this).css("margin-top",dhkgd); 
		var f = $(this).parent(".sy_dh");
		f.hide();
		f.css("visibility","visible");  
    });
	
	window.onscroll = function(){		
        var t = document.documentElement.scrollTop || document.body.scrollTop; 
		var h = $(window).height(); 
		var t1 = t - 577;
		var t2 = 869 - t1;
        if( t >= t2 || (t>=10&&h>=1000)) {
			var time0 = 500;
			var time = 888;
			ys1 = setTimeout(function(){
				var a1 = $(".sylist .sy_1");
				var a2 = $(".sylist .sy_1 img");
				a1.animate({filter:'alpha(opacity=100)',opacity:'1',top:'115px',left:'0px'},time);
				a2.animate({filter:'alpha(opacity=100)',opacity:'1',height:'67px',width:'67px'},time);
			},time0);
			ys1 = setTimeout(function(){
				var b1 = $(".sylist .sy_2");
				var b2 = $(".sylist .sy_2 img");
				b1.animate({filter:'alpha(opacity=100)',opacity:'1',top:'-60px',left:'110px'},time);
				b2.animate({filter:'alpha(opacity=100)',opacity:'1'},time);	
			},time*1+time0);
			ys1 = setTimeout(function(){
				var c1 = $(".sylist .sy_3");
				var c2 = $(".sylist .sy_3 img");
				c1.animate({filter:'alpha(opacity=100)',opacity:'1',top:'-75px',left:'265px'},time);
				c2.animate({filter:'alpha(opacity=100)',opacity:'1'},time);	
			},time*2+time0);
			ys1 = setTimeout(function(){
				var d1 = $(".sylist .sy_4");
				var d2 = $(".sylist .sy_4 img");
				d1.animate({filter:'alpha(opacity=100)',opacity:'1',top:'-110px',left:'425px'},time);
				d2.animate({filter:'alpha(opacity=100)',opacity:'1'},time);	
			},time*3+time0);
			ys1 = setTimeout(function(){
				var e1 = $(".sylist .sy_5");
				var e2 = $(".sylist .sy_5 img");
				e1.animate({filter:'alpha(opacity=100)',opacity:'1',top:'-255px',left:'565px'},time);
				e2.animate({filter:'alpha(opacity=100)',opacity:'1'},time);	
			},time*4+time0);
			ys1 = setTimeout(function(){
				var f1 = $(".sy_t .sy_t_1");
				f1.animate({width:'150px'},time/2);
			},time*5+time0);
			ys1 = setTimeout(function(){
				var f2 = $(".sy_t .sy_t_2");
				f2.animate({width:'310px'},time/2);
			},time*5+time/2+time0);
			ys2 = setTimeout(function(){
				clearTimeout(ys1);
				var z = $(".sylist .sy_y");
				z.each(function() {
					var y = $(this);
					var x = y.index()+1;
					var w = $(".sylist .sy_dh_"+x);
					y.hover(function(){
						w.show();
						var obj=y.find("img");
						var y_img=$(obj).attr("src");
						var h_img=$(obj).attr("src0");
						if(h_img){
							$(obj).attr("src",h_img);
							$(obj).attr("src0",y_img);
						}
					},function(){
						w.hide();
						var obj=y.find("img");
						var y_img=$(obj).attr("src");
						var h_img=$(obj).attr("src0");
						if(h_img){
							$(obj).attr("src",h_img);
							$(obj).attr("src0",y_img);
						}
					});
				});
			},time*6+time0);
	//if(document.documentElement.scrollTop==0){
		
	//}
			//alert("ggg");
            //top_div.style.display = "inline"; 
        } else {
            //top_div.style.display = "none"; 
        } 
    }
});
