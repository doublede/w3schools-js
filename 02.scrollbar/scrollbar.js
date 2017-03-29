var out=document.getElementById('out');
    var con=document.getElementById('con');
    var box=document.getElementById('box');
    var drag=document.getElementById('drag');
    drag.onmousedown=function (ev){
        var e=ev||window.event;
        if (e.preventDefault) {
            e.preventDefault();
        } else{
            e.returnValue=false;
        };
        var d_bkt=e.clientY-drag.offsetTop;
        document.onmousemove=function (ev){
            var e=ev||window.event;
            var top=e.clientY-d_bkt;
            if (top<=0) {
                top=0;
            };
            if (top>=box.clientHeight-drag.clientHeight) {
                top=box.clientHeight-drag.clientHeight;
            };
            var scale=top/(box.clientHeight-drag.clientHeight);
            var cony=scale*(con.clientHeight-out.clientHeight);
            drag.style.top=top+'px';
            con.style.top=-cony+'px';
            console.log(top);
        }
        document.onmouseup=function (){
            document.onmousemove=null;
        }
    }
    var str=window.navigator.userAgent.toLowerCase();
    if (str.indexOf('firefox')!=-1) {//火狐浏览器
        out.addEventListener('DOMMouseScroll',function (e){
            e.preventDefault();//阻止窗口默认的滚动事件
        if (e.detail<0) {
            var t=con.offsetTop+20;
            if (t>=0) {
                t=0;
            };
            if (t<=-(con.clientHeight-out.clientHeight)) {
                t=-(con.clientHeight-out.clientHeight);
            };
            var scale=t/(con.clientHeight-out.clientHeight);
            var top=scale*(box.clientHeight-drag.clientHeight);
            con.style.top=t+'px';
            drag.style.top=-top+'px';
        };
        if (e.detail>0) {
            var t=con.offsetTop-20;
            if (t>=0) {
                t=0;
            };
            if (t<=-(con.clientHeight-out.clientHeight)) {
                t=-(con.clientHeight-out.clientHeight);
            };
            var scale=t/(con.clientHeight-out.clientHeight);
            var top=scale*(box.clientHeight-drag.clientHeight);
            con.style.top=t+'px';
            drag.style.top=-top+'px';
        };
        },false);
    };