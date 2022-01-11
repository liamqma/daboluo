//请求截图
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

var imgStartFishing = images.read("开始钓鱼.png");

var utils = require('../utils');
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;

function jinRuDiaoYu() {
    // 点击：垂钓亭
    choosePeople(1)

    // 点击：钓鱼
    clickOnButtonUnderTheDialog(1)
}

function clickOnFishing() {
    click(1498, 376);
}

function fishing(imgHooked) {

    var screenshot;
    var p;

    jinRuDiaoYu();

    for(let i=0; i<= 50; i++) {

        // 点击：钓鱼
        clickOnFishing();
        
        sleep(5000);

        var count = 20

        while(!p) {
            sleep(1000);
            screenshot = captureScreen();
            p = findImage(screenshot, imgHooked, { threshold: 0.7 });
            toast("没钓到");

            count--;
            if (count === 0) {
                break;
            }
        }

        if (p) {
            toast("钓到了");
            // 点击： 拉杆
            clickOnFishing();
        } else {
            toast("终止");
        }

        sleep(2000);

        screenshot = captureScreen();
        p = findImage(screenshot, imgStartFishing, { threshold: 0.7 });

        if (!p) {
            jinRuDiaoYu();
        }

        // 点击：离开
        // click(1441, 777)

        // sleep(3000);
    }
}

module.exports = {
    fishing: fishing,
}