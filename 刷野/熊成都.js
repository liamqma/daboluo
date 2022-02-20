var utils = require("../utils");
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;
var waitForMapChange = utils.waitForMapChange;
var yanXingGong = utils.yanXingGong;
var jiFaJiuTu = utils.jiFaJiuTu;
var shiZhanQingGong = utils.shiZhanQingGong;
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;

right();
down(2);
left(6);
up(2);
left();
up();
yanXingGong();

shiZhanQingGong();
click(518, 382);
sleep(2000);

toast("地面");
choosePeople(1);
sleep(2000);
toast("施展轻功");
clickOnButtonUnderTheDialog(3);
click(607, 653);
sleep(1000);
click(612, 650);
sleep(1000);

shiZhanQingGong();
sleep(1000);
down();
sleep(1000);
click(528, 377);
sleep(1000);

left(3);
jiFaJiuTu();
shiZhanQingGong();
up(2);
waitForMapChange();
toast("到山洞了");

click(1013, 474);
sleep(30000);
click(636, 670);
waitForMapChange();
toast("到成都了");
right(2);
yanXingGong();

toast("地面");
choosePeople(1);
sleep(2000);
toast("施展轻功");
clickOnButtonUnderTheDialog(3);

click(1179, 689);
sleep(1000);
up();
sleep(1000);

shiZhanQingGong();
click(1188, 376);
sleep(1000);
up();
sleep(1000);

toast("地面");
choosePeople(1);
sleep(2000);
toast("施展轻功");
clickOnButtonUnderTheDialog(3);
click(1191, 694);
sleep(1000);

jiFaJiuTu();
down();
right();
down(2);
right(6);
up(2);
left();
