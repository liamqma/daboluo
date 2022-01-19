var utils = require('../utils');
var left = function(count) { return utils.left(count, 300); };
var down = function(count) { return utils.down(count, 300); };
var up = function(count) { return utils.up(count, 300); };
var right = function(count) { return utils.right(count, 300); };
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;

left(5);
down(9);
left(10);
down(22);
sleep(10000);

// 到南阳渡了
down(4);
right(6);
down();
right(6);
down(33);

// 点击船夫
choosePeople(2);
// 点击渡江
clickOnButtonUnderTheDialog();
sleep(2000);
clickCenter();
sleep(10000);

// 进入：双王镇
down(2);
right(8);
down(2);
right(5);
down(11);
right(8);
down(2)
right(2)
down(2)
click(1278, 950);
sleep(10000)

// 到衡山了
right(6)
down()
right(16)
down(4)
left()
down(3);
right(4);
click(1457, 528);
sleep(2000)
click(1482, 337);
sleep(2000)
click(839, 203);
sleep(2000)

// 点击: 莫无极
choosePeople(2);
// 点击：送镖
clickOnButtonUnderTheDialog();
clickCenter();
sleep(2000)

click(615, 940);
sleep(2000)
click(189, 757);
sleep(2000)
click(306, 569);
sleep(2000)
left(3)
up(4)
left(2)
up()
left()
up(2)
left(3)
down(8)
sleep(8000)

// 到南岭了
down()
left(7)
down(13)
left()