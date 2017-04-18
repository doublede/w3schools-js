/**
 * Created by 德德 on 2017/4/17.
 */
//JS使用64位有符号数字
console.log(1&1,30&30);    //按位与
console.log(1|1,0|1,13|30);    //按位或
console.log(~1,~25);      //按位非
console.log(1^1);   //按位异或
console.log(6<<1);      //左移 相当于*2
console.log(6>>1);       //右移  相当于/2

console.log(-6<<1);     //除符号位外左移 相当于*2
console.log(-6>>1);    //除符号位外右移
console.log(6>>>1);       //右移（包括符号位）,最后一位被舍弃
console.log(-6>>>1);       //包括符号位的右移,负值变正值
