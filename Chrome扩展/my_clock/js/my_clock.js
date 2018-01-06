function my_clock(el){
	var today=new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	if(h<10)h='0'+h;
	if(m<10)m='0'+m;
	if(s<10)s='0'+s;
	el.innerHTML = h+":"+m+":"+s;
	setTimeout(function(){my_clock(el)},1000);
}
var clock_div=document.getElementById('clock_div');
my_clock(clock_div);