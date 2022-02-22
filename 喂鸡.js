var utils = require("utils");
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;
var xuanWuPin = utils.xuanWuPin;

var number = parseInt(rawInput("请输入次数"));

toast("循环" + number + "次");
sleep(2000);

function start() {
  choosePeople(2);
  clickOnButtonUnderTheDialog(1);
  xuanWuPin(1);
  sleep(2000);
  clickCenter();
  sleep(16 * 60 * 1000);
}

for (var count = 1; count <= number; count++) {
  start();
}
