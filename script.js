var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})

tl.from(".line1-part1,line h2",{
    opacity:0,
    onStart:function(){
        var h5=document.querySelector(".line1-part1 h5");
var gap=0;
setInterval(function(){
    if(gap<100){
        h5.innerHTML=gap++;
    }
    else{
        h5.innerHTML=gap;
    }
},34)
    }
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4
})

tl.from(".page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    duration:0.5,
    ease:Power4
})
tl.to("#loader",{
    display:"none",
})