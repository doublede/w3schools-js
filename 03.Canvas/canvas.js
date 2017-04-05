/**
 * Created by 德德 on 2017/3/29.
 */
var canvas1 = document.getElementById('canvas1');
var ctx = canvas1.getContext('2d');
ctx.lineWidth = 5;
ctx.strokeStyle = '#024598';
ctx.fillStyle = " rgba(0,255,0,0.4)";
ctx.lineCap = "square";        //round、square、butt
ctx.strokeRect(10, 10, 52, 63);      //等价于ctx.rect(10,10,52,63);ctx.stroke();
ctx.arc(55, 55, 50, 0, 1.5 * Math.PI, false);
ctx.fill();
ctx.clearRect(20, 70, 20, 20);
ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);
ctx.clip();           //将后面的绘图限制在一定的空间里
ctx.fillRect(40, 180, 50, 50);
ctx.font = "30px Arial";              //设置字体样式；
ctx.textAlign="center";          //start、end、left、center、right
ctx.textBaseline="ideographic"      //alphabetic、bottom、hanging、ideographic、middle、top
ctx.fillText('hello world', 100, 100);

var img1=new Image();
img1.src="images/1.jpg";
img1.onload=function(){            //不加onload没效果，必须等图片加载完成
    ctx.drawImage(img1,100,100,30,30);
    var ctxData=ctx.getImageData(0,0,200,200);
    ctx.putImageData(ctxData,40,40);
}



