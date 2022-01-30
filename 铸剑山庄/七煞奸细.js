
//请求截图
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

var img = images.read("七煞奸细文字.jpeg");

var utils = require('../utils');
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;

function check() {
    sleep(1000);
    var screenshot = captureScreen();
    var p = findImage(screenshot, img, { region: [ 520, 175, 230, 70 ], threshold: 0.7 });
    
    if (p) {
        toast("有奸细")
        sleep(2000)
        clickCenter();
        toast("开始战斗");
        sleep(30000)
        toast("战斗结束");
        return true;
    }
    toast("没有奸细");
    return false
}

for (var count = 0; count < 10; count ++) {
    toast("点击欧潭林");
    choosePeople(2);
    toast("点击仗义相助");
    clickOnButtonUnderTheDialog();
    sleep(2000);
    toast("点击七煞奸细");
    clickOnButtonUnderTheDialog(2);
    sleep(3000);
    toast("点击应下此事");
    clickOnButtonUnderTheDialog();
    sleep(4000);
    clickCenter();
    sleep(4000);
    clickCenter();
    sleep(4000);
    clickCenter();
    sleep(2000);
    toast("开始走路");

    click(671, 804)
    sleep(2000)
    down(2)
    right(2)
    check();

    left(2)
    down(3)
    right()
    down(7)
    left()
    check();

    right()
    up(7)
    left()
    up()
    left(2)
    up()
    left()
    up()
    left()
    up()
    left(3)
    down(2)
    left(5)
    down()
    left(3)
    toast("到路口了")
    down(3)
    right(3)
    check();
    toast("返回")

    left(3);
    up(3)
    right(4)
    up()
    right(4)
    click(1381, 945)
    sleep(4000)
    click(1506, 313)
    sleep(3000)
    click(1056, 327)
    sleep(3000)
}

img.recycle();
