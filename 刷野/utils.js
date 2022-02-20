// utils
var utils = require("../utils");
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;
var waitForMapChange = utils.waitForMapChange;
var clickCenter = utils.clickCenter;
var yanXingGong = utils.yanXingGong;
var jiFaJiuTu = utils.jiFaJiuTu;
var shiZhanQingGong = utils.shiZhanQingGong;
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;

function xiongSaiBei() {
  toast("十方集到天山");
  down();
  left(8);
  down(4);
  left(5);
  up(5);
  left();
  up();
  left();
  up(3);
  left(2);

  click(728, 121);
  waitForMapChange();
  toast("到天山了");
  clickCenter();
  sleep(3000);
  up(7);
  left(8);
  up();
  left(4);
  down(2);
  left(3);
  up(3);
  left();
  up(2);
  toast("打熊");
  sleep(2000);

  down(2);
  right();
  down(3);
  right(3);
  up(2);
  right(4);
  down();
  right(8);
  down(7);
  click(723, 820);
  waitForMapChange();
  toast("到塞北了");
  clickCenter();
  sleep(3000);
  right(4);
  down(4);
  right();
  down();
  right();
  down(5);
  right(5);
  up(4);
  right(8);
  up();
  toast("到车夫了");
}

function anQi() {
  sleep(8000);
  click(278, 876);
  sleep(1000);
  click(682, 876);
  sleep(1000);
  click(1144, 876);
  sleep(1000);
  click(1580, 876);
  sleep(70000);
  toast("战斗结束");
}

function start() {
  down();
  anQi();

  for (var i = 0; i < 50; i++) {
    down();
    left(3);
    anQi();

    right(3);
    up();
    anQi();
  }
}

function kuaiSu() {
  down();
  sleep(2000);

  for (var count = 0; count < 50; count++) {
    down();
    left(3);
    sleep(3000);

    click(716, 801);
    sleep(5000);

    click(1064, 852);
    sleep(5000);

    click(1384, 384);
    sleep(5000);

    left(4);
    up(2);
    sleep(3000);
  }
}

function xiongChengDu() {
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
  toast("地面");
  choosePeople(1);
  sleep(2000);
  toast("施展轻功");
  clickOnButtonUnderTheDialog(3);
  up();
  sleep(1000);
  up();
  waitForMapChange();
  toast("到山洞了");

  click(1013, 474);
  sleep(60000);
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
}

module.exports = {
  start: start,
  kuaiSu: kuaiSu,
  xiongSaiBei: xiongSaiBei,
  xiongChengDu: xiongChengDu,
};
