
var l = $("audio")[0]

function name(name, song, jpg) {
    this.name = name,
        this.song = song
    
    this.jpg=jpg
}
var x = ["./李不懂 - 可乐.mp3", "./河图 - 不见长安.mp3", "./陆易 - 你，好不好（Cover：周兴哲）.mp3", "./王贰浪 - 爱你.mp3"]
var a = new name("李不懂", "可乐","./1.jpg")
var b = new name("河图", "不见长安","./2.jpg")
var c = new name("陆易", "你，好不好（Cover：周兴哲","./3.jpg")
var d = new name("王贰浪", "爱你","./4.jpg")
var arr = [a, b, c, d]
var curret = 0


// 进度条
// animation: mymove22 10s linear ;

// 点击加载进度条
$(".progresss").mousedown(function(event){
var x = (event.pageX || event.clientX) - $(this).offset().left;
// console.log(x);
var y=event.offsetX/330*100
console.log(y/100*330);

console.log(l.currentTime);
l.currentTime=y/100*330
console.log(l.currentTime);

console.log(y/100*330);

$(".progresss .interior").css("width",y+"%");

})

//  点击改变音量
$(".banding").mousedown(function(event){
var boxvoice = (event.pageX || event.clientX) - $(this).offset().left;
// l.volume=x
var voice=boxvoice/100
l.volume=voice
$(".banding .small").css("width",boxvoice+"px");
})


console.log(30%60);


$("audio").attr("src", x[curret])
//  时间

function xx(n) {
    return n < 10 ? "0" + n : String(n)
}
var minute = document.querySelector(".minute")
var second = document.querySelector(".second")



setInterval(function () {
var endm=Math.floor(l.duration/60)
var ends=Math.floor(l.duration%60)
var plaYtime=Math.floor(l.currentTime)
var s=plaYtime%60
var m=Math.floor(plaYtime/60)
document.querySelector(".minute .m").innerText = xx(m);
document.querySelector(".second .s").innerText = xx(s);
document.querySelector(".end .endm").innerText = xx(endm);
document.querySelector(".end .ends").innerText = xx(ends);
    // qg()
},1000)



l.ontimeupdate= function () {
// console.log(audio.currentTime/ audio.duration * 100 + '%');
$(".progresss .interior").css("width", l.currentTime/ l.duration * 100 + '%');
}
// 开始播放
$(".btnsss span").eq(1).click(function () {
    
    // console.log($(".btnsss span").eq(1).hasClass("glyphicon-play"));


    if ($(".btnsss span").eq(1).hasClass("glyphicon-play")) {
        $("audio")[0].play()
    }
    if ($(".btnsss span").eq(1).hasClass("glyphicon-play")) {
        $(".btnsss span").eq(1).removeClass("glyphicon-play").addClass("glyphicon-pause");
        $(".strip").css('transform', 'rotate(40deg)')
        $(".box").addClass("stadeg").removeClass("stadeg1")
        // $("audio").play()
        // console.log($("audio"));


    } else {
      
        $(".btnsss span").eq(1).addClass("glyphicon-play").removeClass("glyphicon-pause");
        $(".strip").css('transform', 'rotate(0deg)')
        $(".box").addClass("stadeg1")
        $("audio")[0].pause()
    }


})
// 歌单切歌
$(".bottom li").click(function () {

    $(this).children().addClass("glyphicon-volume-up").end().siblings().children().removeClass("glyphicon-volume-up")
    $(".boxright h3").text(arr[$(this).index()].song)
    $(".boxright p").text(arr[$(this).index()].name)
    $("audio").attr("src", x[$(this).index()])
    // console.log(arr[$(this).index()].jpg);
    
    $(".image img").attr("src",arr[$(this).index()].jpg)
    $(".head").css("background","url("+arr[$(this).index()].jpg+") no-repeat")
    $(".head").css("background-size", "cover")
    $(".head").css("background-position","center")
    $(".btnsss span").eq(1).removeClass("glyphicon-play").addClass("glyphicon-pause");
    $(".strip").css('transform', 'rotate(40deg)')
        $(".box").addClass("stadeg").removeClass("stadeg1")
    $("audio")[0].play()
    setInterval(function () {
    if (l.currentTime==l.duration) {
        $(".btnsss span").eq(1).removeClass("glyphicon-pause").addClass("glyphicon-play")
    }
},1000)
})

console.log(l);

l.onended = function () {
//  自动下一曲
if (curret>3) {
curret=0
}

$("audio").attr("src", x[curret]);
$("audio")[0].oncanplay = function () {
        
    }
$(".bottom li span").eq(curret).addClass("glyphicon-volume-up").parent().siblings().children().removeClass("glyphicon-volume-up")
    $(".boxright h3").text(arr[curret].song)
    $(".boxright p").text(arr[curret].name)
    $(".image img").attr("src",arr[curret].jpg)
    $(".head").css("background","url("+arr[curret].jpg+") no-repeat")
    $(".head").css("background-size", "cover")
    $(".head").css("background-position","center")
l.play();
curret++
}



// 下一首
$(".btnsss span").eq(2).click(function () {
    curret++
    if (curret > 3) {
        curret = 0
    }
    $(".bottom li span").eq(curret).addClass("glyphicon-volume-up").parent().siblings().children().removeClass("glyphicon-volume-up")
    $(".boxright h3").text(arr[curret].song)
    $(".boxright p").text(arr[curret].name)
    $("audio").attr("src", x[curret])
    $(".image img").attr("src",arr[curret].jpg)
    $(".head").css("background","url("+arr[curret].jpg+") no-repeat")
    $(".head").css("background-size", "cover")
    $(".head").css("background-position","center")
    $("audio")[0].play()
    $(".btnsss span").eq(1).removeClass("glyphicon-play").addClass("glyphicon-pause");
    $(".strip").css('transform', 'rotate(40deg)')
    $(".box").addClass("stadeg").removeClass("stadeg1")

})







// 上一首
$(".btnsss span").eq(0).click(function () {
    curret--
    if (curret < 0) {
        curret = 3
    }
    $(".bottom li span").eq(curret).addClass("glyphicon-volume-up").parent().siblings().children().removeClass("glyphicon-volume-up")
    $(".boxright h3").text(arr[curret].song)
    $(".boxright p").text(arr[curret].name)
    $("audio").attr("src", x[curret])
    $(".image img").attr("src",arr[curret].jpg)
    $(".head").css("background","url("+arr[curret].jpg+") no-repeat")
    $(".head").css("background-size", "cover")
    $(".head").css("background-position","center")
    $(".btnsss span").eq(1).removeClass("glyphicon-play").addClass("glyphicon-pause");
    $(".strip").css('transform', 'rotate(40deg)')
    $(".box").addClass("stadeg").removeClass("stadeg1")
    l.play()
})