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
left(28)
sleep(8000)

// 到落霞镇了
left(5)
down(13)
left(4)
down(3)
left(33)
down(3)
right(2)
down(2)
right()
down(3)
left(2)
up()
left(3)
up(2)
left()
up()
left()
click(1448, 122)
sleep(4000)
click(860, 420)
sleep(8000)

// 到华山了
left(2)
up(6)
left(7)
down(4)
left(5)
down(6)
left(17)
up(4)
left(10)
sleep(8000)

// 到敦煌了
left(4)
click(1182,377)
sleep(2000)
left(14)
up(4)
right(2)
up(5)

// 点击: 莫无极
choosePeople(2);
// 点击：送镖
clickOnButtonUnderTheDialog();
clickCenter();