var utils = require("../utils");
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;
var yanXingGong = utils.yanXingGong;
var jiFaDiYiGeQingGong = utils.jiFaDiYiGeQingGong;
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;

var number = Math.ceil(parseInt(rawInput("请输入体力")) / 24);
toast("运行" + number + "次");
sleep(2000);

left();
down(4);
yanXingGong();

toast("地面");
choosePeople(1);
sleep(2000);

toast("施展轻功");
clickOnButtonUnderTheDialog(2);

click(614, 633);
sleep(1000);
down();
sleep(1000);

toast("地面");
choosePeople(1);
sleep(2000);

toast("施展轻功");
clickOnButtonUnderTheDialog(2);

click(396, 754);
sleep(3000);

for (var count = 0; count < number; count++) {
  left();
  sleep(4000);

  down(3);
  left();
  down();
  sleep(4000);

  up();
  right(3);
  sleep(4000);

  up(2);
  right(2);
  sleep(4000);

  left(3);
  up();
  toast("循坏" + (count + 1) + "/" + number + "结束");
}

toast("地面");
choosePeople(1);
sleep(2000);

toast("施展轻功");
clickOnButtonUnderTheDialog(2);

click(1284, 320);
sleep(3000);

up(2);

toast("地面");
choosePeople(1);
sleep(2000);

toast("施展轻功");
clickOnButtonUnderTheDialog(2);

click(1180, 382);
sleep(3000);
jiFaDiYiGeQingGong();

right();
up(2);
