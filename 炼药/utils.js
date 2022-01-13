if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

var imgMark = images.read("mark.jpeg");
var imgBar = images.read("bar.jpeg");

function clickOnFire() {
    click(1498, 376);
}

function shanHuo() {
    // 点击：煽火
    clickOnFire();

    for(var i=0; i<= 40; i++) {
        var screenshot = captureScreen();
        var pMark = findImage(screenshot, imgMark, { region: [ 780, 770, 120, 60 ], threshold: 0.7 });
        var pBar = findImage(screenshot, imgBar, { region: [ 628, 770, 610, 60 ], threshold: 0.7 });
    
        if(pMark && pBar){
            if(pBar.x - pMark.x < 30) {
                toast("找到啦:" + pMark + pBar);
                clickOnFire();
            }
        } else {
            toast("没找到");
        }
        sleep(500)
    }
}

module.exports = {
    shanHuo: shanHuo,
    clickOnFire: clickOnFire,
}