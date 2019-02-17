var typeName = {
	'[object Function]': 'function',
	'[object Boolean]': 'boolean',
	'[object Number]': 'number',
	'[object String]': 'string',
	'[object Object]': 'object',
	'[object RegExp]': 'regExp',
	'[object Array]': 'array',
	'[object Error]': 'error',
	'[object Date]' : 'date'	
};
var toStringFn = Object.prototype.toString;    //获取到对象的toString方法
 
function checkType(obj){
	if( obj == null ){
		return String( obj );	//js自带的的String方法，用于检测null和undefined
	}	
	//safari5及之前版本，Chrome7, typeof RegExp返回的是function
	return typeof obj ==='object' || typeof obj === "function" ?
		   typeName[toStringFn.call(obj)]:typeof obj;        
}

// --- test ---
var obj = {};
var str = 'string';
var num = 123;
var bool = true;
var arr = [];
var reg = /a-z/;
var fn = function(){};
var obj_null = null;
var undf = undefined;
 
var obj2 = new Object();
var obj_str = new String('string');
var obj_num = new Number();
var obj_bool = new Boolean();
var obj_arr = new Array();
var obj_reg = new RegExp();
var obj_fn = new Function();
var obj_date = new Date();
 
console.log(checkType(obj));		//object
console.log(checkType(str));		//string
console.log(checkType(num));		//number
console.log(checkType(bool));		//boolean
console.log(checkType(arr));		//array
console.log(checkType(reg));		//regExp
console.log(checkType(fn));			//function
console.log(checkType(obj_null));	//null
console.log(checkType(undf));	//undefined
console.log('-----------------------分界线');
console.log(checkType(obj2));		//object
console.log(checkType(obj_str));	//string
console.log(checkType(obj_num));	//number
console.log(checkType(obj_bool));	//boolean
console.log(checkType(obj_arr));	//array
console.log(checkType(obj_reg));	//regExp
console.log(checkType(obj_fn));		//function
console.log(checkType(obj_date));	//date
