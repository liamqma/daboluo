if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

var imgShouGe = images.read("收割.jpeg");
var imgChongYao = images.read("虫咬.jpeg");
var imgShiFei = images.read("施肥.jpeg");
var imgZaCao = images.read("杂草.jpeg");
var imgKuHuang = images.read("枯黄.jpeg");

var utils = require('../utils');
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var xuanWuPin = utils.xuanWuPin;

var number = parseInt(rawInput("请输入种植次数", "5"));

if (number) {
    toast("循环" + number + "次")
    for(var count = 0; count < number; count ++) {
        toast("草地");
        choosePeople(1);
        toast("种植");
        clickOnButtonUnderTheDialog(2);
        xuanWuPin(1);
        sleep(5000);
        toast("种的东西");
        choosePeople(2);

        while (true) {
            var screenshot = captureScreen();
            var pShouGe = findImage(screenshot, imgShouGe, { region: [ 1017, 462, 300, 85 ], threshold: 0.7 });
            var pChongYao = findImage(screenshot, imgChongYao, { region: [ 840, 270, 400, 60 ], threshold: 0.7 });
            var pShiFei = findImage(screenshot, imgShiFei, { region: [ 840, 270, 400, 60 ], threshold: 0.7 });
            var pZaCao = findImage(screenshot, imgZaCao, { region: [ 840, 270, 400, 60 ], threshold: 0.7 });
            var pKuHuang = findImage(screenshot, imgKuHuang, { region: [ 840, 270, 400, 60 ], threshold: 0.7 });

            if (pShouGe) {
                toast("收割");
                clickOnButtonUnderTheDialog(1);
                sleep(10000)
                break;
            } else if (pChongYao) {
                toast("虫咬");
                clickOnButtonUnderTheDialog(4)
                sleep(10000)
            } else if (pShiFei) {
                toast("施肥");
                clickOnButtonUnderTheDialog(3)
                sleep(10000)
            } else if (pZaCao) {
                toast("杂草");
                clickOnButtonUnderTheDialog(1)
                sleep(10000)
            } else if (pKuHuang) {
                toast("叶子枯黄");
                clickOnButtonUnderTheDialog(2)
                sleep(10000)
            } else {
                toast("正常");
                sleep(5000)
            }
        }
    }
} else {
    toast("invalid input")
}


