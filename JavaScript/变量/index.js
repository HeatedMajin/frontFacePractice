/*
	//有五种数值类型：Number、String、Boolean、Undefined、Object(Null)
	//不支持自定义数据类型
	
	//未赋值的变量就是Undefined
	var a;
	alert(a);

	var a = null;
	alert(a);		//null
	alert(typeof a);//object

//typeof可用来检查function
	function a(){};
	alert(typeof a);	//function

var a;
alert(typeof a);	// undefined
alert(a);			// undefined
alert(typeof b);	// undefined
alert(b);			// "error"

alert(undefined==null);//true
alert(undefined===null);//false


//转型函数
var a = Boolean({});
alert(a);	//true
//隐式转型
if("aaa"){
	alert("aaa");
}else{
	alert("bbb");
}

//number类型支持2、8、10、16进制

alert(00.8);//"error"

//科学计数法e：4.12e3	3.14e-5

//浮点最高精度17位小数

//浮点范围在Number.MAX_VALUE和MIN_VALUE(这里的Number变成了对象)
alert(Number.MAX_VALUE);
alert(Number.MIN_VALUE);

//正负无穷：Number.POSITIVE_INFINITY、NEGATIVE_INFINITY
alert(Number.POSITIVE_INFINITY);

//isFinite()检查数字是否在有效的表示范围内
var a =10e3000;
alert(isFinite(a));

//NaN，not a number。本来要返回数字的，结果未返回数值
alert(0/0);	//NaN
alert(12/0);	//Infinity
alert(12/0*0);	//NaN	

alert(NaN==NaN);//false
var a= NaN;
var b = NaN;
alert(a==b);//false


//isNaN()可以判断变量是不是NaN,可以自动转换
alert(isNaN(5));	//false
alert(isNaN('5'));	//false
alert(isNaN(true));	//false
var obj = {
	toString:function(){
		return 1;
	}
}
alert(isNaN(obj));	//false

//Number()可以把任一变量转换成数字,parseInt()把string转成数字，parseFloat()把string转成float
alert(Number("123"));		//123
alert(Number("123Lee"));	//NaN

alert(parseInt("123"));		//123
alert(parseInt("123asd"));	//123
alert(parseInt("asd123asd"));//NaN

//String(v)和v.toString()将变量v转成string
//但是toString()不能转undefined和null
var a=null;
var b;
alert(a.toString());//"error"
alert(b.toString());//"error"
alert(String(null));	//null
alert(String(undefined));//undefined

*/






