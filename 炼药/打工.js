var utils = require('../utils');
var utils2 = require('./utils');
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;
var up = utils.up;
var down = utils.down;
var shanHuo = utils2.shanHuo;
var clickOnFire = utils2.clickOnFire;

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

    shanHuo();

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


