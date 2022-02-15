// utils
var utils = require("utils");
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var yanXingGong = utils.yanXingGong;
var jiFaDiYiGeQingGong = utils.jiFaDiYiGeQingGong;

left(9);
up(21);
left(2);

yanXingGong();

toast("地面");
choosePeople(1);
sleep(2000);

toast("施展轻功");
clickOnButtonUnderTheDialog(2);

click(620, 434);
sleep(1000);
up();

// 点击：藏经阁顶
choosePeople(1);
sleep(2000);

// 点击：钻入小窗
clickOnButtonUnderTheDialog(1);
sleep(2000);

// 点击：钻入
clickOnButtonUnderTheDialog(1);
sleep(8000);

// 进入藏经阁了
click(828, 708);
sleep(2000);

// 点击：书架
choosePeople(2);
sleep(2000);

// 点击：搜索书架
clickOnButtonUnderTheDialog(1);
sleep(40000);

toast("书读完了");

click(600, 609);
sleep(2000);

// 点击：二层
choosePeople(1);
sleep(2000);

// 点击：开窗
clickOnButtonUnderTheDialog(1);
sleep(2000);

// 点击：跳出窗口
clickOnButtonUnderTheDialog(1);
sleep(2000);

// 点击：藏经阁顶
choosePeople(1);
sleep(2000);

// 点击：施展轻功
clickOnButtonUnderTheDialog(3);

click(1289, 748);
sleep(1500);
down();
sleep(2000);

jiFaDiYiGeQingGong();

down(21);
right(9);
