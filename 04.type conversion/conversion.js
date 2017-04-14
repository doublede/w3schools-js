/**
 * Created by 德德 on 2017/4/12.
 */
/*
console.log('123', typeof 123);
console.log('"apple"', typeof 'apple');
console.log('function(){}', typeof function () {
});
console.log('{}', typeof {});
console.log('[1,2,3]', typeof [1, 2, 3]);
console.log('new Date()', typeof new Date());
console.log('NaN', typeof NaN);
console.log('true', typeof true);
console.log('fghj', typeof fghj);
console.log('null', typeof null);

//输出data的原型函数
console.log((123), (123).constructor);
console.log('"apple"', "apple".constructor);
console.log('function(){}', function () {
}.constructor);
console.log('{}', {}.constructor);
console.log('[1,2,3]', [1, 2, 3].constructor);
console.log('new Date()', new Date().constructor);
console.log('NaN', NaN.constructor);
console.log('true', true.constructor);
//console.log('null', null.constructor);        //报错Cannot read property 'constructor' of null
//console.log('asd',asd.constructor);         //报错

//converting to string
console.log(String(123));        //123
console.log(String([1, 2, 3]));      //1,2,3
console.log(String(new Date()));
console.log(String(NaN));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String(function () {
}));
//console.log(String(sadfd));       //报错sadfd is not defined
console.log(String(123 + 34));
console.log(String('123' + 34));
console.log(String(123 + '34'));
 //console.log(null.toString());          //toString类等于String(),但是这里会报错Cannot read property 'toString' of null
 //console.log(undefined.toString());          // undefined也会报错，所以在用toString前要先做判断
 */

//converting to number
console.log(Number([1, 2, 3]));
console.log(Number(new Date()));        //转换成以秒为基的庞大数字
console.log(Number(NaN));
console.log(Number(true));             // 1
console.log(Number(null));            // 0
console.log(Number('123'));
console.log(Number(12.3 + '34'));
console.log(Number(123 + 34));
console.log(Number(undefined));
console.log(Number(123 + 'hj'));      // NaN 只有全是number才能转换成功,允许出现一个小数点
console.log(+'123' + 22);
console.log('5' + 2);      // "52"   + 更倾向转换成字符串
console.log('5' - 2);       // 3   - 更倾向于转换成数字

//converting to boolean
console.log(Boolean('000'), Boolean(''));          //有值字符串转换为true,空字符串转换为false
console.log(Boolean(0), Boolean(-77));         //非零数字转换为true
console.log(Boolean({}), Boolean([]));           //对象和数组转换成true
console.log(Boolean(null), Boolean(undefined));     //null和undefined都转换成false