/**
 * Created by 德德 on 2017/3/29.
 */
var canvas1 = document.getElementById('canvas1');
var ctx = canvas1.getContext('2d');
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(114, 356);
ctx.stroke();