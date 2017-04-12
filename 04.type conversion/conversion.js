/**
 * Created by 德德 on 2017/4/12.
 */
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
console.log('null', null.constructor);
//console.log('asd',asd.constructor);         //报错