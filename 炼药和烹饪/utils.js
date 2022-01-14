if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

var imgBar = images.read("bar.jpeg");

function clickOnFire() {
    click(1462, 358);
}

function shanHuo() {
    // 点击：煽火
    clickOnFire();

    for(var i=0; i<= 40; i++) {
        var screenshot = captureScreen();
        var pBar = findImage(screenshot, imgBar, { region: [ 628, 770, 610, 60 ], threshold: 0.7 });
        var pMarkX = 825;
    
        if(pBar && pBar.x - pMarkX < 30){
            clickOnFire();
        }
        sleep(500)
    }
}

function cook(firstMarkX) {
    clickOnFire();
    sleep(1000);
    clickOnFire();
    
    for(var i=0; i<= 40; i++) {
        var screenshot = captureScreen();
        var pBar = findImage(screenshot, imgBar, { region: [ 625, 770, 600, 40 ], threshold: 0.8 });
        // var firstMarkX = 877;
    
        if(pBar && pBar.x - firstMarkX < 30){
            clickOnFire();
        }
        
        sleep(500)
    }
}

module.exports = {
    shanHuo: shanHuo,
    clickOnFire: clickOnFire,
    cook: cook
}