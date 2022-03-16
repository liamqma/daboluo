var utils = require("utils");
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;
var chengDuFuBen = utils.chengDuFuBen;
var waitForMapChange = utils.waitForMapChange;
var youZhou = utils.youZhou;
var muRen = utils.muRen;
var increaseBuyingItemCount = utils.increaseBuyingItemCount;
var chooseBuyItem = utils.chooseBuyItem;
var exitShop = utils.exitShop;
var buy = utils.buy;

if (!requestScreenCapture()) {
  toast("请求截图失败");
  exit();
}

var imgXiuFuKuiLei = images.read("修复傀儡.jpeg");

function increaseWuDaoBuyingItemCount(count) {
  if (!count) count = 10;
  for (let i = 0; i < count; i++) {
    click(1689, 594);
  }
  sleep(1000);
}

function shiFangJi() {
  toast("从马车跑到药店");
  click(347, 267);
  sleep(2000);
  click(502, 597);
  sleep(2000);

  toast("白先生");
  choosePeople(3);

  toast("买卖");
  clickOnButtonUnderTheDialog();

  toast("甘草");
  chooseBuyItem(3);
  increaseBuyingItemCount();
  buy();

  toast("枸杞");
  chooseBuyItem(5);
  increaseBuyingItemCount(5);
  buy();

  exitShop();

  toast("去敦煌");
  click(1544, 855);
  sleep(2000);
  click(1496, 833);
  sleep(2000);
  click(1518, 545);
  sleep(2000);
  click(1389, 575);
  sleep(5000);
}

function dunHuang() {
  toast("到敦煌了");
  click(1384, 863);
  sleep(2000);
  click(287, 893);
  sleep(2000);
  click(944, 898);
  sleep(2000);
  click(598, 912);
  sleep(2000);
  click(1415, 799);
  sleep(2000);
  click(1522, 863);
  sleep(2000);
  click(1522, 863);
  sleep(2000);
  click(1067, 949);
  sleep(5000);
}

function huaShan() {
  toast("到华山了");
  click(1494, 873);
  sleep(2000);
  click(917, 929);
  sleep(2000);
  click(1480, 926);
  sleep(2000);
  click(1491, 847);
  sleep(2000);
  click(1594, 573);
  sleep(2000);
  click(1598, 562);
  sleep(2000);
  click(1581, 467);
  sleep(2000);
  click(1034, 934);
  sleep(2000);
  click(1034, 934);
  sleep(2000);
  click(750, 799);
  sleep(5000);
}

function luoXiaZhen() {
  toast("到落霞镇了");
  click(1080, 912);
  sleep(10000);
  click(1455, 913);
  sleep(2000);
  click(1537, 852);
  sleep(2000);
  click(939, 701);
  sleep(2000);

  toast("到药店");
  click(1492, 724);
  sleep(2000);
  click(1058, 435);
  sleep(2000);
  toast("郎中");
  choosePeople(2);

  toast("买卖");
  clickOnButtonUnderTheDialog();

  toast("甘草");
  chooseBuyItem(3);
  increaseBuyingItemCount(10);
  buy();

  toast("枸杞");
  chooseBuyItem(4);
  increaseBuyingItemCount(5);
  buy();

  exitShop();

  click(1284, 936);
  sleep(2000);
  click(1502, 857);
  sleep(2000);
  click(1502, 533);
  sleep(2000);
  click(1500, 531);
  sleep(2000);
  click(1491, 222);
  sleep(2000);
  click(1505, 428);
  sleep(2000);
  click(1184, 699);
  sleep(5000);
}

function luoYang() {
  toast("到洛阳了");
  click(1496, 845);
  sleep(2000);
  click(1513, 871);
  sleep(2000);
  click(1500, 838);
  sleep(2000);
  click(193, 764);
  sleep(2000);

  toast("点击郎中");
  choosePeople(2);
  toast("点击买卖");
  clickOnButtonUnderTheDialog();
  toast("甘草");
  chooseBuyItem(3);
  increaseBuyingItemCount(10);
  buy();
  toast("杜仲");
  chooseBuyItem(5);
  increaseBuyingItemCount(5);
  buy();
  exitShop();

  right();
  up(3);
  left(2);

  toast("到薛掌柜了");

  right(2);
  down(3);
  left();

  click(830, 852);
  sleep(2000);

  muRen();

  up(2);

  function wuDaoBei() {
    toast("武道碑");
    choosePeople(2);
    toast("查看");
    clickOnButtonUnderTheDialog();
    toast("铜钱");
    click(759, 902);
    sleep(2000);
    toast("洗髓丹");
    chooseBuyItem(1);
    increaseWuDaoBuyingItemCount(5);
    buy();
    sleep(8000);
    toast("确认");
    click(958, 700);
    sleep(8000);
    click(958, 700);
    sleep(8000);
    exitShop();

    // 点击： 批量战斗
    click(1476, 923);
    sleep(1000);
    click(1203, 705);
    sleep(2000);
    click(1203, 705);
    sleep(2000);
    click(1781, 758);
    sleep(2000);
  }

  wuDaoBei();

  down();
  right(2);

  function wuGuan() {
    for (let i = 0; i < 1; i++) {
      // 点击常四海
      choosePeople(2);
      // 点击切磋
      clickOnButtonUnderTheDialog(2);
      sleep(5000);
      // 点击切磋
      clickOnButtonUnderTheDialog();
      sleep(5000);
      clickCenter();
      sleep(5000);
      clickCenter();
      sleep(5000);
      clickCenter();
      sleep(60000);
      toast("武馆结束，往下走一个取消对话框");
      right();
      sleep(2000);
      right();
      sleep(2000);
    }
  }

  wuGuan();

  left(4);
  down(4);
  right(7);
  up(3);
  left(1);

  toast("点击王屠夫");
  choosePeople(2);
  toast("点击买卖");
  clickOnButtonUnderTheDialog();
  toast("猪肉");
  chooseBuyItem(1);
  increaseBuyingItemCount(5);
  buy();
  exitShop();

  click(974, 488);
  sleep(2000);

  toast("点击摊贩");
  choosePeople(2);
  toast("点击买卖");
  clickOnButtonUnderTheDialog();
  toast("点击调料");
  chooseBuyItem(1);
  increaseBuyingItemCount(5);
  buy();
  toast("点击葱蒜");
  chooseBuyItem(2);
  increaseBuyingItemCount(5);
  buy();
  toast("米");
  chooseBuyItem(4);
  increaseBuyingItemCount(5);
  buy();
  exitShop();

  right(2);
  down();

  toast("菜贩");

  up();
  left(2);

  toast("去南阳渡");
  click(191, 639);
  sleep(2000);
  click(212, 425);
  sleep(2000);
  click(269, 837);
  sleep(2000);
  click(372, 771);
  sleep(10000);
}

function nanYangDu() {
  toast("到南阳渡了");
  down(4);
  right(6);
  down();
  right(6);
  down(15);
  left(2);
  sleep(2000);

  // 点击李掌柜
  choosePeople(2);
  // 点击买卖
  clickOnButtonUnderTheDialog();
  // 点击：鱼饵
  chooseBuyItem(8);
  increaseBuyingItemCount(1);
  buy();
  exitShop();

  down();
  left(4);
  up(2);
  left();
  sleep(1000);

  muRen();

  right();
  down(2);
  right(6);
  down(2);
  left();
  sleep(2000);

  // 点击郎中
  choosePeople(2);
  // 点击买卖
  clickOnButtonUnderTheDialog();
  // 甘草
  chooseBuyItem(2);
  increaseBuyingItemCount(10);
  buy();
  // 白芍
  chooseBuyItem(3);
  increaseBuyingItemCount(5);
  buy();
  exitShop();

  right();
  down(15);
  sleep(2000);

  // 点击船夫
  choosePeople(2);
  // 点击渡江
  clickOnButtonUnderTheDialog();
  sleep(2000);
  clickCenter();
  sleep(10000);
}

function shuangWangZhen() {
  toast("到双王镇了");
  down(2);
  right(8);
  down(2);
  right(5);
  down(8);
  left(1);
  sleep(2000);

  right();
  down(3);
  right(3);
  down(3);
  right(1);

  muRen();

  left();
  up(3);
  right(2);
  down();

  toast("李小白");

  up();
  left(5);
  down(8);
  left(10);
  down(4);
  left(3);
  click(375, 317);
  sleep(8000);
}

function fengMingJi() {
  toast("到凤鸣集了");
  left(6);
  sleep(1000);
  up(3);
  sleep(1000);
  left(5);
  sleep(1000);
  down(7);
  sleep(1000);
  left(16);
  sleep(1000);
  up(3);
  right();

  muRen();

  left();
  down(3);
  left();
  down();
  sleep(2000);

  toast("摊贩");
  choosePeople(2);
  toast("买卖");
  clickOnButtonUnderTheDialog();
  toast("捕兽夹");
  chooseBuyItem(6);
  increaseBuyingItemCount(1);
  buy();
  toast("鱼饵");
  chooseBuyItem(8);
  increaseBuyingItemCount(1);
  buy();
  exitShop();

  up();
  left();
  up();

  toast("老郎中");
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
  toast("杜仲");
  chooseBuyItem(5);
  increaseBuyingItemCount(2);
  buy();
  exitShop();

  down();
  left(2);
  up(4);
  left(10);
  sleep(5000);
}

function chengDu() {
  toast("到成都了");
  left(2);
  down(13);
  left(5);
  up(15);
  left(5);
  down();
  left(3);

  // 点击: 侯掌柜
  choosePeople(3);
  // 点击买卖
  clickOnButtonUnderTheDialog();
  // 点击：捕兽夹
  chooseBuyItem(4);
  buy();
  exitShop();

  left();
  sleep(2000);

  // 点击: 葛药师
  choosePeople(2);
  // 点击买卖
  clickOnButtonUnderTheDialog();
  // 点击：甘草
  chooseBuyItem(3);
  increaseBuyingItemCount(10);
  buy();
  // 点击：枸杞
  chooseBuyItem(5);
  increaseBuyingItemCount(3);
  buy();
  exitShop();

  right();
  sleep(2000);
  right(2);
  down(3);
  right(2);
  up();
  right(2);
  sleep(2000);

  // 点击: 账房弟子
  choosePeople(3);
  // 点击: 八卦商店
  clickOnButtonUnderTheDialog();
  // 点击：大力丸
  chooseBuyItem(1);
  increaseBuyingItemCount(3);
  buy();
  // 点击：白芍
  chooseBuyItem(2);
  increaseBuyingItemCount(3);
  buy();
  exitShop();

  // chengDuFuBen();

  left(2);
  down();
  left(2);
  up(3);
  left();
  up(2);
  right();
  up(4);
  left();
  toast("公孙仪");
  choosePeople(2);
  toast("买卖");
  clickOnButtonUnderTheDialog();
  toast("泸州老窖");
  chooseBuyItem(3);
  increaseBuyingItemCount(3);
  buy();
  exitShop();
  right();
  up(4);
  left(14);
  click(517, 178);
  sleep(2000);
  waitForMapChange();
  toast("到青城山了");
}

function qingChengShanDaoDaXueShan() {
  click(676, 188);
  sleep(3000);
  up();
  left();
  up();
  left(10);

  up(9);
  toast("养蜂人");
  choosePeople(2);
  toast("买卖");
  clickOnButtonUnderTheDialog();
  toast("红糖");
  chooseBuyItem(1);
  increaseBuyingItemCount(5);
  buy();
  toast("蜂蜜");
  chooseBuyItem(2);
  increaseBuyingItemCount(5);
  buy();
  toast("桂花蜜");
  chooseBuyItem(3);
  increaseBuyingItemCount(5);
  buy();
  exitShop();
  down(9);

  down(4);
  left(11);
  waitForMapChange();
  toast("到大雪山了了");
}

function daXueShan() {
  click(857, 235);
  sleep(3000);
  left();
  up();
  left();
  up();
  left(9);
  up(2);
  left(6);
  up(10);
  right(3);
  down(2);
  right(10);
  up(2);
  left();
  up(2);
  left();
  up(6);
  left();

  toast("点击灵智上师");
  choosePeople(2);
  clickOnButtonUnderTheDialog();

  toast("点击洗髓丹");
  chooseBuyItem(1);
  increaseBuyingItemCount(5);
  buy();

  toast("点击顺脉丹");
  chooseBuyItem(2);
  increaseBuyingItemCount(1);
  buy();

  exitShop();

  right();
  down(6);
  right();
  down(4);
  left(9);
  up(2);
  left(3);
  down(10);
  right(6);
  down(2);
  right(9);
  down();
  right();
  down();
  right();
  down(5);
  click(1394, 798);
  sleep(2000);
  waitForMapChange();
  toast("到青城山了");
}

function qingChengShanDaoChengDu() {
  click(1361, 856);
  sleep(3000);
  right(5);
  up(4);
  right(10);
  down();
  right(3);
  down(3);
  click(1053, 952);
  sleep(2000);
  waitForMapChange();
  toast("到成都了");
}

function chengDuDaoEMeiShan() {
  click(1413, 812);
  sleep(3000);
  right(12);
  down(8);
  right();
  down();
  right(5);
  down(16);

  toast("去峨眉山");
  left(10);
  down(3);
  waitForMapChange();
  toast("到峨眉山");
}

function eMeiShan() {
  click(433, 813);
  sleep(3000);
  down(2);
  right();
  down(10);
  left(2);
  down(10);
  left(2);

  toast("胡掌柜");
  choosePeople(2);
  toast("买卖");
  clickOnButtonUnderTheDialog();
  toast("竹叶青");
  chooseBuyItem(3);
  increaseBuyingItemCount(5);
  buy();
  toast("九酝春");
  chooseBuyItem(4);
  increaseBuyingItemCount(5);
  buy();
  exitShop();

  right(2);
  up(10);
  right(2);
  up(10);
  left();
  up(2);
  click(1392, 243);
  sleep(3000);
  waitForMapChange();
  toast("到成都了");
}

function chengDuDaoFengMingJi() {
  up(3);
  right(16);
  up(14);
  right(2);
  waitForMapChange();
  toast("到凤鸣集了");
}

function fengMingJiDaoLongQuanZhen() {
  toast("到凤鸣集了，从凤鸣集到龙泉镇");
  right(10);
  down(4);
  right(20);
  up(7);
  right(5);
  down(3);
  right(6);
  sleep(5000);

  // 到双王镇了
  click(1233, 897);
  sleep(2000);
  up(4);
  right(10);
  up(8);
  right(8);
  down(2);
  right(2);
  down(2);
  right(3);
  down(2);
  right(3);
  sleep(5000);

  // 到衡山了
  right(6);
  down();
  right(4);
  up(5);
  right(4);
  up(9);
  left(3);
  up(7);
  sleep(5000);
}

function longQuan() {
  toast("到龙泉镇了");
  up();
  right(6);
  up(3);
  left(5);
  up(12);
  left(6);
  sleep(2000);

  // 点击: 张掌柜
  choosePeople(2);
  // 点击: 买卖
  clickOnButtonUnderTheDialog();
  // 点击：捕兽夹
  chooseBuyItem(6);
  increaseBuyingItemCount(1);
  buy();
  exitShop();

  right();
  sleep(2000);
  right();
  up(8);
  sleep(5000);
}

function hangZhou() {
  toast("到杭州了");
  up(8);
  left(7);
  down(2);
  left(4);
  up(3);
  left();
  up(4);
  left();
  up();
  left();
  up(2);
  right(2);

  function guanHe() {
    toast("点击: 观荷");
    choosePeople(2);
    sleep(3000);
    toast("点击: 曲院风荷");
    clickOnButtonUnderTheDialog();
    sleep(3000);
    clickCenter();
    sleep(1000);
  }

  guanHe();

  left(3);
  up(5);
  left();
  toast("到曲老了");
  right();
  down(5);
  right();
  down(2);
  right();
  down();
  right();
  down(4);
  right();
  down(2);
  right(4);
  up(2);
  right(7);

  right(3);
  up();
  right(2);
  up();

  toast("水果商人");

  right();
  up();
  right(4);
  up();
  toast("菜贩");

  down();
  left(4);
  down();
  left();
  toast("水果贩");

  down();
  left(2);
  up(7);
  left();

  toast("点击: 鹊乐医");
  choosePeople(2);
  toast("点击: 买卖");
  clickOnButtonUnderTheDialog();
  toast("点击: 甘草");
  chooseBuyItem(3);
  increaseBuyingItemCount(10);
  buy();
  toast("点击: 茯苓");
  chooseBuyItem(4);
  increaseBuyingItemCount(2);
  buy();
  toast("点击: 牛黄");
  chooseBuyItem(6);
  increaseBuyingItemCount(5);
  buy();
  exitShop();

  right();
  up(2);
  right(14);
  sleep(5000);
}

function quanZhou() {
  toast("到泉州了");
  right(2);
  up(3);
  right(3);
  up(5);
  right(7);
  up(3);
  right();
  up();

  function fuBen() {
    toast("点击: 郑文德");
    choosePeople(2);
    toast("点击: 血衣楼");
    clickOnButtonUnderTheDialog();
    sleep(2000);
    toast("点击: 挑战");
    clickOnButtonUnderTheDialog();
    sleep(2000);
    click(925, 598);
    sleep(8000);
    click(274, 283);
    sleep(3000);
    down(5);
    sleep(3000);
    left(7);
    up();
    sleep(3000);
    up(8);
    sleep(3000);
    up();
    sleep(8000);

    toast("二楼");
    left(6);
    sleep(3000);
    up(7);
    sleep(3000);
    right();
    sleep(2000);
    right(6);
    up();
    sleep(3000);
    up();
    sleep(8000);

    toast("三楼");
    left(6);
    sleep(3000);
    right();
    up();
    sleep(3000);
    toast("点击: 确认离开");
    clickOnButtonUnderTheDialog();
    sleep(3000);
    right();
    up();
  }

  fuBen();

  down();
  left();
  down(3);
  right(2);
  up();

  toast("点击: 利永新");
  choosePeople(2);
  toast("点击: 买卖");
  clickOnButtonUnderTheDialog();
  toast("点击: 捕兽夹");
  chooseBuyItem(5);
  increaseBuyingItemCount(1);
  buy();
  toast("点击: 鱼饵");
  chooseBuyItem(8);
  increaseBuyingItemCount(1);
  buy();
  exitShop();

  down();
  right(5);
  up(3);
  right();
  toast("到杜瑶竹了");
  left();
  up(3);
  right(4);

  toast("点击: 陆飞");
  choosePeople(2);
  toast("点击: 巨鲸宝库");
  clickOnButtonUnderTheDialog(2);
  toast("点击: 海钓鱼竿");
  chooseBuyItem(2);
  increaseBuyingItemCount(1);
  buy();
  exitShop();

  left(4);
  down(6);
  left(14);
  down(5);
  left(2);
  click(291, 574);
  sleep(8000);
}

function hangZhouDaoGuSu() {
  toast("到杭州了");
  left(14);
  up(12);
  left(11);
  up(3);
  sleep(5000);
}

function guSu() {
  toast("到姑苏了");
  click(1376, 506);
  sleep(3000);
  up(23);
  left(3);
  up(3);
  left(3);
  up(3);
  left(12);
  up();

  // 点击: 华十三
  choosePeople(2);
  // 点击: 买卖
  clickOnButtonUnderTheDialog();
  // 点击：甘草
  chooseBuyItem(2);
  increaseBuyingItemCount(10);
  buy();
  exitShop();

  down();
  left(3);
  down(2);
  right();
  down();
  right();

  muRen();

  left();
  up();
  left();
  up(2);
  left(3);
  up();

  // 点击: 伙计
  choosePeople(2);
  // 点击: 买卖
  clickOnButtonUnderTheDialog();
  // 点击：鱼饵
  chooseBuyItem(8);
  increaseBuyingItemCount(1);
  buy();
  exitShop();

  down();
  left(14);
  down(3);
  right(2);
  down(6);
  left(2);

  function fuBen() {
    left(1);
    sleep(5000);

    // 点击: 挑战
    clickOnButtonUnderTheDialog();
    sleep(5000);
    clickCenter();
    sleep(8000);

    // 进入副本了
    click(1167, 762);
    sleep(2000);
    click(235, 497);
    sleep(2000);
    down();
    left(3);
    up(2);
    sleep(2000);
    up(5);
    sleep(2000);
    up(5);
    sleep(2000);
    up(4);
    sleep(2000);
    up(2);
    left(3);
    sleep(2000);
    right(2);
    up(2);
    sleep(2000);
    up();
    right();
    up(2);
    sleep(2000);
    down(2);
    right(2);
    sleep(3000);
    // 点击： 确认离开
    clickOnButtonUnderTheDialog();
    sleep(8000);
  }

  fuBen();

  right(2);
  up(6);
  left(2);
  up(3);
  right(15);
  up(13);
  right(2);
  up(2);
  right(4);
  up(2);
  sleep(8000);
}

function taiShan() {
  toast("到泰山了");
  up(3);
  left(6);
  up(7);
  left(12);
  down(5);
  left(6);
  down(4);

  function fuBen() {
    toast("老木匠");
    choosePeople(3);
    toast("墨门遗迹");
    clickOnButtonUnderTheDialog();
    sleep(3000);
    toast("挑战");
    clickOnButtonUnderTheDialog();
    sleep(3000);
    clickCenter(0);
    sleep(5000);

    toast("废墟");
    click(278, 365);
    sleep(5000);

    function baoXiang() {
      toast("宝箱");
      choosePeople(2);
      sleep(2000);
      toast("打开");
      clickOnButtonUnderTheDialog();
      click(806, 432);
      sleep(1000);
      click(806, 432);
      sleep(1000);
      click(806, 432);
      sleep(1000);
      click(1382, 672);
      sleep(2000);
    }

    baoXiang();

    click(953, 162);
    sleep(3000);
    click(636, 217);
    sleep(4000);
    left();
    up(2);
    sleep(3000);

    baoXiang();

    down(2);
    left();
    down(3);
    left(3);
    up();
    left();
    sleep(3000);

    baoXiang();

    right(2);
    down();
    right(3);
    down(2);
    right(2);
    down(4);
    sleep(5000);
    clickCenter();

    baoXiang();

    up(4);
    right(3);
    up(2);
    left(2);
    sleep(5000);

    toast("进门");
    clickOnButtonUnderTheDialog();
    sleep(5000);

    toast("明鬼塔第一层");
    up(2);
    sleep(3000);
    click(1065, 435);
    sleep(5000);

    toast("明鬼塔第二层");
    up(2);

    baoXiang();

    down();
    left();
    sleep(2000);
    toast("点击: 是");
    clickOnButtonUnderTheDialog();
    sleep(3000);
  }

  fuBen();

  function xiuLian() {
    left();

    toast("机关台");
    choosePeople(2);
    sleep(2000);
    toast("修炼武艺");
    clickOnButtonUnderTheDialog();
    sleep(2000);
    toast("选择人物");
    clickOnButtonUnderTheDialog();
    sleep(2000);

    toast("选主角，点确认");
    click(1261, 225);
    sleep(4000);

    toast("选剑术");
    clickOnButtonUnderTheDialog();
    sleep(4000);

    toast("选一具");
    clickOnButtonUnderTheDialog();
    sleep(60000);
    toast("战斗结束");

    right();
  }

  for (var count = 0; count < 5; count++) {
    xiuLian();
  }

  function xiuKuiLei() {
    left();
    toast("机关台");
    choosePeople(2);
    sleep(2000);
    var p = findImage(captureScreen(), imgXiuFuKuiLei, { threshold: 0.7 });
    if (p) {
      clickOnButtonUnderTheDialog(2);
      sleep(5000);
      clickOnButtonUnderTheDialog(1);
      sleep(6000);
    } else {
      toast("没有要修复的傀儡");
    }
    clickCenter();
    sleep(2000);
    right();
  }

  xiuKuiLei();

  up(4);
  right(6);
  up(6);
  right(12);
  up(12);
  right(4);
  down();
  right(2);
  up(5);
  left(2);
  up(2);
  left(2);
  up(10);
  right(3);
  up(3);
  sleep(8000);
}

const maps = [
  shiFangJi,
  dunHuang,
  huaShan,
  luoXiaZhen,
  luoYang,
  nanYangDu,
  shuangWangZhen,
  fengMingJi,
  chengDu,
  qingChengShanDaoDaXueShan,
  daXueShan,
  qingChengShanDaoChengDu,
  chengDuDaoEMeiShan,
  eMeiShan,
  chengDuDaoFengMingJi,
  fengMingJiDaoLongQuanZhen,
  longQuan,
  hangZhou,
  quanZhou,
  hangZhouDaoGuSu,
  guSu,
  taiShan,
  youZhou,
];

var mapNames = maps.map((map) => map.name);

var index = dialogs.select("请选择一个选项", mapNames);

if (index >= 0) {
  maps.forEach((map, i) => {
    if (i >= index) {
      map();
    }
  });
} else {
  toast("您取消了选择");
}
