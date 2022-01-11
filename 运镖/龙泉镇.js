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
down(22)
left(3)
down(9)
sleep(8000)

// 到龙泉镇了
down(8)
right(4)
up(2)
right(3)
down()
right()
down()
right()
down()
right(2)
up(5)
left()
up(3)

// 点击: 欧潭林
choosePeople(2);
// 点击：送镖
clickOnButtonUnderTheDialog();
clickCenter();

down(3)
right()
down(5)
left(2)
up()
left()
up()
left()
up()
left(3)
down(2)
left(5)
up()