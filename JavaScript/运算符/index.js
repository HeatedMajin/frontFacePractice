/*
var  a="2" ;
a++;
alert(typeof a);//数值字符串++，隐含转型功能



var box = {};
box++;
alert(box);			//NaN
alert(typeof box);	//number


var box = {
	valueOf:function(){	//toString()一样
		return 123;
	}
};
box++;
alert(box);			//124
alert(typeof box);	//number



*/

//+取正也有自动转型
