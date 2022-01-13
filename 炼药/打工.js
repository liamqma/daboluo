if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

var utils = require('../utils');
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;
var up = utils.up;
var down = utils.down;


var imgMark = images.read("mark.jpeg");
var imgBar = images.read("bar.jpeg");

function clickOnFire() {
    click(1498, 376);
}

for(var count=1; count<=10; count++) {
    // 点击：老郎中
    choosePeople(2)
    // 点击：打工
    clickOnButtonUnderTheDialog(3)
    clickCenter();
    sleep(4000)

    up()
    sleep(2000)

    // 点击：药炉
    choosePeople(2)
    // 点击：炼丹
    clickOnButtonUnderTheDialog()

    // 点击：查看药方
    click(1163, 378)
    sleep(1000)

    // 点击：十全大补丹
    click(618, 826)
    sleep(1000)

    // 点击：确认丹方
    click(1320, 809)
    sleep(1000)
    // 点击：煽火
    clickOnFire();

    for(var i=0; i<= 50; i++) {
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

    // 点击：离开
    click(1459, 755)
    sleep(1000)

    down()
    sleep(2000)

    // 点击：老郎中
    choosePeople(2)
    // 点击：打工
    clickOnButtonUnderTheDialog(3)
    clickCenter();
    sleep(2000)
}

imgMark.recycle();
imgBar.recycle();

