/**
 * Created by 德德 on 2017/3/29.
 */
var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');
ctx1.lineWidth = 5;
ctx1.strokeStyle = '#024598';
ctx1.fillStyle = " rgba(0,255,0,0.4)";
ctx1.lineCap = "square";        //round、square、butt
ctx1.strokeRect(10, 10, 52, 63);      //等价于ctx1.rect(10,10,52,63);ctx1.stroke();
ctx1.arc(55, 55, 50, 0, 1.5 * Math.PI, false);
ctx1.fill();
ctx1.clearRect(20, 70, 20, 20);
ctx1.arc(100, 100, 100, 0, 2 * Math.PI, false);
ctx1.clip();           //将后面的绘图限制在一定的空间里
ctx1.fillRect(40, 180, 50, 50);
ctx1.font = "30px Arial";              //设置字体样式；
ctx1.textAlign = "center";          //start、end、left、center、right
ctx1.textBaseline = "ideographic"      //alphabetic、bottom、hanging、ideographic、middle、top
ctx1.fillText('hello world', 100, 100);

var img1 = new Image();
img1.src = "images/1.jpg";
img1.onload = function () {            //不加onload没效果，必须等图片加载完成
    ctx1.drawImage(img1, 100, 100, 30, 30);
    var ctx1Data = ctx1.getImageData(0, 0, 200, 200);
    ctx1.putImageData(ctx1Data, 40, 40);
}
var img2 = ctx1.createImageData(100, 100);
for (var i = 0; i < img2.width * img2.height * 4; i += 4) {   //每个像素点给予数据
    img2.data[i + 0] = 255;
    img2.data[i + 1] = 0;
    img2.data[i + 2] = 0;
    img2.data[i + 3] = 100;     //透明度0到255；
}
ctx1.putImageData(img2, 20, 20);

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
ctx2.beginPath();
ctx2.strokeStyle = "yellow";
ctx2.strokeRect(10, 10, 100, 100);
ctx2.scale(3, 3);            //缩放(x,y）
ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.strokeRect(10, 10, 100, 100);
ctx2.scale(0.5, 0.5);      //在上一次变换的基础上变换;
ctx2.beginPath();
ctx2.strokeStyle = "blue";
ctx2.strokeRect(10, 10, 100, 100);
ctx2.translate(50, 30);       //平移（x,y）
ctx2.strokeRect(10, 10, 100, 100);
ctx2.rotate(0.3 * Math.PI);   //选择（angle)
ctx2.strokeRect(10, 10, 100, 100);

//利用transform矩阵实现多样化变形,transform(a,b,c,d,e,f)
var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');
ctx3.beginPath();
ctx3.strokeStyle = "#123456";
ctx3.strokeRect(0, 0, 100, 100);
ctx3.transform(2, 0, 0, 2, 0, 0);     //缩放(a,0,0,d,0,0)
ctx3.strokeRect(0, 0, 100, 100);
ctx3.strokeStyle = '#550000';
ctx3.transform(0.5, 0, 0, 0.5, 0, 0);
ctx3.strokeRect(10, 10, 200, 200);
ctx3.transform(1, 0, 0, 1, 50, 100);     //平移(1,0,0,1,e,f)
ctx3.strokeRect(10, 10, 200, 200);
