function choosePeople(number) {
  sleep(1000);
  switch (number) {
    case 1:
      click(1791, 512);
      break;
    case 2:
      click(1791, 597);
      break;
    case 3:
      click(1791, 680);
      break;
  }
  sleep(5000);
}

function clickOnButtonUnderTheDialog(number) {
  if (!number) number = 1;
  switch (number) {
    case 1:
      toast("点击对话框下第一个按钮");
      click(1209, 476);
      break;
    case 2:
      toast("点击对话框下第二个按钮");
      click(1204, 595);
      break;
    case 3:
      toast("点击对话框下第三个按钮");
      click(1204, 693);
      break;
    case 4:
      toast("点击对话框下第四个按钮");
      click(1204, 810);
      break;
  }
  sleep(2000);
}

function up(count, delay) {
  if (!count) count = 1;
  if (!delay) delay = 200;
  for (let index = 0; index < count; index++) {
    click(967, 479);
    sleep(delay);
  }
}

function down(count, delay) {
  if (!count) count = 1;
  if (!delay) delay = 200;
  for (let index = 0; index < count; index++) {
    click(713, 594);
    sleep(delay);
  }
}

function left(count, delay) {
  if (!count) count = 1;
  if (!delay) delay = 200;
  for (let index = 0; index < count; index++) {
    click(689, 477);
    sleep(delay);
  }
}

function right(count, delay) {
  if (!count) count = 1;
  if (!delay) delay = 200;
  for (let index = 0; index < count; index++) {
    click(950, 585);
    sleep(delay);
  }
}

function clickCenter() {
  click(876, 530);
}

function meiHuaZhuang() {
  // 点击：梅花桩
  choosePeople(2);
  // 点击： 挑战
  clickOnButtonUnderTheDialog();
  // 点击： 训练轻功
  clickOnButtonUnderTheDialog();
  for (let i = 0; i < 20; i++) {
    press(1248, 522, 995);
    sleep(2000);
  }
  click(1735, 807);
  sleep(2000);
}

function chengDuFuBen() {
  left();
  up();
  // 点击：董三川
  choosePeople(2);
  // 点击: 天一教
  clickOnButtonUnderTheDialog();
  sleep(4000);
  // 点击：挑战
  clickOnButtonUnderTheDialog();
  sleep(4000);
  clickCenter();
  sleep(4000);
  clickCenter();
  sleep(8000);

  click(1470, 871);
  sleep(4000);
  right(2);
  up(1);
  right(1);
  toast("第一个敌人");
  clickCenter();
  sleep(30000);

  right(9);
  up(2);
  sleep(3000);
  toast("第二个敌人");
  clickCenter();
  sleep(120000);
  toast("第二个敌人结束");

  down(2);
  left(10);
  down();
  left(7);
  click(338, 438);
  sleep(3000);
  // 点击：确认
  clickOnButtonUnderTheDialog();
  sleep(4000);
  // 点击：确认离开
  clickOnButtonUnderTheDialog();
  sleep(8000);

  right();
}

function waitForMapChange() {
  sleep(7000);
}

function youZhou() {
  toast("到幽州了");
  up(15);
  right(7);
  down(3);
  left();

  meiHuaZhuang();

  right(2);
  down();

  muRen();

  left();
  up(4);
  left(8);

  toast("施必救");
  choosePeople(2);
  toast("买卖");
  clickOnButtonUnderTheDialog();
  toast("甘草");
  chooseBuyItem(3);
  increaseBuyingItemCount(10);
  buy();
  toast("茯苓");
  chooseBuyItem(4);
  increaseBuyingItemCount(5);
  buy();
  toast("白芍");
  chooseBuyItem(5);
  increaseBuyingItemCount(2);
  buy();
  exitShop();

  right();
  up(7);
  left();

  toast("到周掌柜了");
  right();
  down(2);
  left(9);
  up(3);
  toast("少一段");
  down(2);
  left();

  toast("菜贩");
  choosePeople(2);
  toast("买卖");
  clickOnButtonUnderTheDialog();
  toast("豆腐");
  chooseBuyItem(4);
  increaseBuyingItemCount(5);
  buy();
  exitShop();

  down(2);
  toast("猪肉荣");
  choosePeople(2);
  toast("点击买卖");
  clickOnButtonUnderTheDialog();
  toast("猪肉");
  chooseBuyItem(1);
  increaseBuyingItemCount(5);
  buy();
  toast("羊肉");
  chooseBuyItem(2);
  increaseBuyingItemCount(5);
  buy();
  toast("牛肉");
  chooseBuyItem(3);
  increaseBuyingItemCount(5);
  buy();
  exitShop();

  up();
  right(10);
  up(2);
  left();
  toast("到周掌柜了");
  right(5);
  up(3);
  right();
  up();
  right();

  toast("地牢入口");
  choosePeople(2);
  sleep(5000);

  toast("到地牢了");
  left(6);
  up();
  left();

  toast("狱卒");
  choosePeople(2);
  toast("笼斗");
  clickOnButtonUnderTheDialog();
  sleep(4000);
  toast("参与笼斗");
  clickOnButtonUnderTheDialog();
  sleep(4000);
  toast("对战囚徒");
  clickOnButtonUnderTheDialog();
  sleep(5000);
  clickCenter();
  sleep(5000);
  clickCenter();
  sleep(8000);
  clickCenter();
  sleep(2000);

  right(2);
  down(3);
  sleep(6000);
  toast("开锁");
  clickOnButtonUnderTheDialog();
  sleep(3000);

  down(2);
  right(2);
  down(2);
  left();

  toast("玩家");
  choosePeople(2);
  toast("笼斗");
  clickOnButtonUnderTheDialog();
}

function muRen() {
  toast("点击木人");
  choosePeople(2);
  sleep(5000);
  toast("点击练武");
  clickOnButtonUnderTheDialog();
  sleep(5000);
}

function increaseBuyingItemCount(count) {
  toast("点击数量增加");
  if (!count) count = 10;
  for (let i = 0; i < count; i++) {
    click(1689, 637);
  }
  sleep(1000);
}

function chooseBuyItem(number) {
  switch (number) {
    case 1:
      click(527, 336);
      break;
    case 2:
      click(1079, 319);
      break;
    case 3:
      click(633, 492);
      break;
    case 4:
      click(1015, 492);
      break;
    case 5:
      click(527, 644);
      break;
    case 6:
      click(1015, 644);
      break;
    case 7:
      click(527, 814);
      break;
    case 8:
      click(1015, 814);
      break;
  }
  sleep(1000);
}

function exitShop() {
  click(1829, 965);
  sleep(1500);
}

function buy() {
  toast("购买");
  click(1565, 904);
  sleep(1000);
}

function xuanWuPin(number) {
  switch (number) {
    case 1:
      click(480, 395);
      break;
    case 2:
      click(630, 395);
      break;
  }
  sleep(1000);
}

function yanXingGong() {
  toast("武功");
  click(614, 1025);
  sleep(2000);

  toast("轻功");
  click(751, 210);
  sleep(2000);

  toast("燕行功");
  click(546, 730);
  sleep(2000);

  toast("激发");
  click(1442, 265);
  sleep(2000);

  toast("离开");
  click(1823, 956);
  sleep(2000);
}

function jiFaDiYiGeQingGong() {
  toast("武功");
  click(614, 1025);
  sleep(2000);

  toast("轻功");
  click(751, 210);
  sleep(2000);

  swipe(556, 352, 556, 833, 1000);

  toast("第一个功夫");
  click(556, 352);
  sleep(2000);

  toast("激发");
  click(1442, 265);
  sleep(2000);

  toast("离开");
  click(1823, 956);
  sleep(2000);
}

module.exports = {
  choosePeople: choosePeople,
  clickOnButtonUnderTheDialog: clickOnButtonUnderTheDialog,
  up: up,
  down: down,
  left: left,
  right: right,
  clickCenter: clickCenter,
  meiHuaZhuang: meiHuaZhuang,
  chengDuFuBen: chengDuFuBen,
  waitForMapChange: waitForMapChange,
  youZhou: youZhou,
  muRen: muRen,
  increaseBuyingItemCount: increaseBuyingItemCount,
  chooseBuyItem: chooseBuyItem,
  exitShop: exitShop,
  buy: buy,
  xuanWuPin: xuanWuPin,
  yanXingGong: yanXingGong,
  jiFaDiYiGeQingGong: jiFaDiYiGeQingGong,
};
