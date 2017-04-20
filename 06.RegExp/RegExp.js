/**
 * Created by 德德 on 2017/4/18.
 */
var str="i am a apple";
console.log(str.search(/appLe/),str.search(/appLe/i));
console.log(str.search(/a/),str.search(/a/g));
console.log(str.replace(/a/,'b'),str.replace(/a/g,'b'));