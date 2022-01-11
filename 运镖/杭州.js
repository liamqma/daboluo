var utils = require('../utils');
var left = function(count) { return utils.left(count, 300); };
var down = function(count) { return utils.down(count, 300); };
var up = function(count) { return utils.up(count, 300); };
var right = function(count) { return utils.right(count, 300); };
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;

left(5)
down(9)
right(11)
sleep(8000)

// 到泰山了
right(4)
down(2)
right(9)
up(5)
right(12)
down(7)
right(6)
down(3)
sleep(8000)

// 到姑苏了
down(2)
left(4)
down(2)
left(2)
down(13)
right(17)
down(3)
right(4)
down(5)
right(2)
down(21)
click(276, 842)
sleep(8000)

// 到杭州了
down(3)
right(11)
down(10)
left(2)

// 点击: 余掌柜
choosePeople(2);
// 点击：送镖
clickOnButtonUnderTheDialog();
clickCenter();

right(2)
down(2)
right(6)
up(2)