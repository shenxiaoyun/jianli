function animate(ele,target,duration,callback){
    duration=duration||200;
    var time=0;
    var interval=10;
    var change={};
    var begin={};
    var effect={
        Linear:function(t,b,c,d){
            return b+t/d*c;
        }
    };
    for(var key in target){
        begin[key]=utils.css(ele,key);
        change[key]=target[key]-begin[key];
    }
    if(ele.timer){
        window.clearInterval(ele.timer);
    }
    ele.timer=setInterval(function(){
        time+=10;
        if(time>duration){
            clearInterval(ele.timer);
            utils.css(ele,target);
            if(typeof  callback=="function"){
                callback.call(ele);
            }
            return;
        }
        for(var key in change){
            if(change[key]){
                var val=effect.Linear(time,begin[key],change[key],duration);
                utils.css(ele,key,val);
            }
        }
    },interval)
}