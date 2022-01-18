// utils
var utils = require('utils');
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;

// 点击数量增加
function increaseBuyingItemCount(count) {
    if (!count) count = 10;
    for(let i = 0; i < count; i++) {
        click(1689, 637);
    }
    sleep(1000);
}

function increaseWuDaoBuyingItemCount(count) {
    if (!count) count = 10;
    for(let i = 0; i < count; i++) {
        click(1689, 594);
    }
    sleep(1000);
}


function chooseBuyItem(number) {
    switch(number) {
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

// 购买
function buy() {
    click(1565, 904);
    sleep(1000);
}

function muRen() {
    // 点击木人
    choosePeople(2);
    sleep(5000);
    // 点击练武
    clickOnButtonUnderTheDialog();
    sleep(5000);
}

// 十方集
function shiFangJi() {
    // 从马车跑到药店
    click(347, 267);
    sleep(2000);
    click(502, 597);
    sleep(2000);

    // 点击白先生
    choosePeople(3);

    // 点击买卖
    clickOnButtonUnderTheDialog();

    // 点击第3个物品：甘草
    chooseBuyItem(3);
    increaseBuyingItemCount();
    buy();

    // 点击第5个物品：枸杞
    chooseBuyItem(5);
    increaseBuyingItemCount(5);
    buy();

    exitShop();

    // 去敦煌
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
    click(1080, 912);
    sleep(10000);
    click(1455, 913);
    sleep(2000);
    click(1537, 852);
    sleep(2000);
    click(939, 701);
    sleep(2000);
    
    // 到药店
    click(1492, 724);
    sleep(2000);
    click(1058, 435);
    sleep(2000);
    // 点击郎中
    choosePeople(2);
    
    // 点击买卖
    clickOnButtonUnderTheDialog();
    
    // 甘草
    chooseBuyItem(3);
    increaseBuyingItemCount(10);
    buy();
    
    // 枸杞
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
    click(1496, 845);
    sleep(2000);
    click(1513, 871);
    sleep(2000);
    click(1500, 838);
    sleep(2000);
    click(193, 764);
    sleep(2000);
    
    // 点击郎中
    choosePeople(2);
    // 点击买卖
    clickOnButtonUnderTheDialog();
    // 甘草
    chooseBuyItem(3);
    increaseBuyingItemCount(10);
    buy();
    // 杜仲
    chooseBuyItem(5);
    increaseBuyingItemCount(5);
    buy();
    exitShop();
    
    click(830, 852);
    sleep(2000);
    
    muRen();

    up(2);

    function wuDaoBei() {
        // 点击武道碑
        choosePeople(2);
        // 点击查看
        clickOnButtonUnderTheDialog();
        // 点击铜钱
        click(759, 902);
        sleep(2000)
        // 点击：洗髓丹
        chooseBuyItem(1)
        increaseWuDaoBuyingItemCount(5);
        buy();
        sleep(8000);
        // 点击： 确认
        click(958, 700)
        sleep(8000);
        // 点击：经验丹
        chooseBuyItem(2)
        increaseWuDaoBuyingItemCount(3);
        buy();
        sleep(8000);
        // 点击： 确认
        click(958, 700)
        sleep(8000);
        exitShop();

        // 点击： 批量战斗
        click(1476, 923);
        sleep(1000)
        click(1203, 705);
        sleep(2000)
        click(1203, 705);
        sleep(2000)
        click(1781, 758);
        sleep(2000);
    }

    wuDaoBei();
 
    down();
    right(2);

    function wuGuan() {
        for (let i = 0; i < 2; i++) {
            // 点击常四海
            choosePeople(2);
            // 点击切磋
            clickOnButtonUnderTheDialog(2);
            sleep(5000);
            // 点击切磋
            clickOnButtonUnderTheDialog();
            sleep(5000);
            clickCenter();
            sleep(5000)
            clickCenter();
            sleep(5000)
            clickCenter();
            sleep(45000);
            toast("武馆结束");
        }
    }

    wuGuan();
    
    left(4);
    down(4);
    right(7);
    up(3);
    left(1);
    
    // 点击王屠夫
    choosePeople(2);
    // 点击买卖
    clickOnButtonUnderTheDialog();
    // 点击：羊肉
    chooseBuyItem(2)
    increaseBuyingItemCount(5);
    buy();
    exitShop();
    
    click(974, 488);
    sleep(2000);
    
    // 点击摊贩
    choosePeople(2);
    // 点击买卖
    clickOnButtonUnderTheDialog();
    // 点击：辣椒
    chooseBuyItem(3)
    increaseBuyingItemCount(5);
    buy();
    exitShop();
    
    // 下面是去泰山
    // click(1582, 588);
    // sleep(2000);
    // click(1557, 449);
    // sleep(2000);
    // click(1500, 838);
    // sleep(2000);
    // click(1067, 640);
    // sleep(2000);
    // 到泰山了
    
    // 去南阳渡
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
    sleep(1000)
    
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
    sleep(2000)
    
    // 点击船夫
    choosePeople(2);
    // 点击渡江
    clickOnButtonUnderTheDialog();
    sleep(2000);
    clickCenter();
    sleep(10000);
}

function shuangWangZhen() {
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
    left(3);
    down(8);
    left(10);
    down(4);
    left(3);
    click(375, 317);
    sleep(8000);
}

function fengMingJi() {
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
    
    // 点击: 摊贩
    choosePeople(2);
    // 点击买卖
    clickOnButtonUnderTheDialog();
    // 点击：捕兽夹
    chooseBuyItem(6)
    increaseBuyingItemCount(1);
    buy();
    // 点击：青竹鱼竿
    chooseBuyItem(7)
    increaseBuyingItemCount(2);
    buy();
    // 点击：鱼饵
    chooseBuyItem(8)
    increaseBuyingItemCount(1);
    buy();
    exitShop();
    
    up();
    left();
    up();
    
    // 点击: 老郎中
    choosePeople(2);
    // 点击买卖
    clickOnButtonUnderTheDialog();
    // 点击：甘草
    chooseBuyItem(3)
    increaseBuyingItemCount(10);
    buy();
    // 点击：茯苓
    chooseBuyItem(4)
    increaseBuyingItemCount(5);
    buy();
    // 点击：杜仲
    chooseBuyItem(5)
    increaseBuyingItemCount(2);
    buy();
    exitShop();
    
    down();
    left(2);
    up(4);
    left(10);
    sleep(5000);
}

function chenDu() {
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
    chooseBuyItem(4)
    buy();
    exitShop();
    
    left();
    sleep(2000);
    
    // 点击: 葛药师
    choosePeople(2);
    // 点击买卖
    clickOnButtonUnderTheDialog();
    // 点击：甘草
    chooseBuyItem(3)
    increaseBuyingItemCount(10);
    buy();
    // 点击：枸杞
    chooseBuyItem(5)
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
    chooseBuyItem(1)
    increaseBuyingItemCount(3);
    buy();
    // 点击：白芍
    chooseBuyItem(2)
    increaseBuyingItemCount(3);
    buy();
    exitShop();
    
    left(2);
    down();
    left(2);
    up(3);
    right();
    up();
    right(5);
    down(15);
    right(5);
    up(13);
    right(2);
    sleep(5000);
}

function fengMingJiDaoLongQuanZhen() {
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
    sleep(2000)
    up(4);
    right(10);
    up(8);
    right(8)
    down(2);
    right(2)
    down(2)
    right(3)
    down(2);
    right(3);
    sleep(5000)
    
    // 到衡山了
    right(6)
    down();
    right(4)
    up(5)
    right(4)
    up(9)
    left(3)
    up(7)
    sleep(5000);
}

function longQuan() {
    up();
    right(6)
    up(3)
    left(5)
    up(12)
    left(6);
    sleep(2000);
    
    // 点击: 张掌柜
    choosePeople(2);
    // 点击: 买卖
    clickOnButtonUnderTheDialog();
    // 点击：捕兽夹
    chooseBuyItem(6)
    increaseBuyingItemCount(1);
    buy();
    exitShop();
    
    right()
    sleep(2000)
    right()
    up(8)
    sleep(5000)
}

function hangZhou() {
    up(9)
    right(3)
    up(8)
    left()
    
    // 点击: 鹊乐医
    choosePeople(2);
    // 点击: 买卖
    clickOnButtonUnderTheDialog();
    // 点击：甘草
    chooseBuyItem(3)
    increaseBuyingItemCount(10);
    buy();
    // 点击：茯苓
    chooseBuyItem(4)
    increaseBuyingItemCount(2);
    buy();
    exitShop();
    
    right()
    up(2)
    right(14)
    sleep(5000)
}

function quanZhou() {
    right(2)
    up(3)
    right(3)
    up(5)
    right(7)
    up(3)
    right()
    up();

    function fuBen() {
        // 点击: 郑文德
        choosePeople(2);
        // 点击: 血衣楼
        clickOnButtonUnderTheDialog();
        sleep(2000)
        // 点击： 挑战
        clickOnButtonUnderTheDialog();
        sleep(2000)
        click(925, 598);
        sleep(8000)
        click(274, 283);
        sleep(3000)
        down(5);
        sleep(3000);
        left(7)
        up();
        sleep(3000);
        up(8);
        sleep(3000);
        up();
        sleep(8000);
        
        // 二楼
        left(6)
        sleep(3000);
        up(7)
        sleep(3000);
        right()
        sleep(2000)
        right(6);
        up();
        sleep(3000);
        up();
        sleep(8000);
        
        // 三楼
        left(6);
        sleep(3000);
        right();
        up();
        sleep(3000);
        // 点击： 确认离开
        clickOnButtonUnderTheDialog();
        sleep(3000);
        right();
        up();
    }
    
    fuBen();
    
    down();
    left();
    down(3)
    right(2)
    up()
    
    // 点击: 利永新
    choosePeople(2);
    // 点击: 买卖
    clickOnButtonUnderTheDialog();
    // 点击：捕兽夹
    chooseBuyItem(5)
    increaseBuyingItemCount(1);
    buy();
    // 点击：青竹鱼竿
    chooseBuyItem(7)
    increaseBuyingItemCount(1);
    buy();
    // 点击：鱼饵
    chooseBuyItem(8)
    increaseBuyingItemCount(1);
    buy();
    exitShop();
    
    down();
    right(5);
    up(6);
    right(4);
    
    // 点击: 陆飞
    choosePeople(2);
    // 点击: 巨鲸宝库
    clickOnButtonUnderTheDialog(2);
    // 点击：海钓鱼竿
    chooseBuyItem(2)
    increaseBuyingItemCount(1);
    buy();
    exitShop();
    
    left(4);
    down(6);
    left(14);
    down(5)
    left(2);
    click(291, 574);
    sleep(8000);
}

function hangZhouDaoGuSu() {
    left(14)
    up(12)
    left(11)
    up(3)
    sleep(5000)
}

function guSu() {
    click(1376, 506);
    sleep(3000)
    up(23)
    left(3);
    up(3)
    left(3)
    up(3)
    left(12)
    up();
    
    // 点击: 华十三
    choosePeople(2);
    // 点击: 买卖
    clickOnButtonUnderTheDialog();
    // 点击：甘草
    chooseBuyItem(2)
    increaseBuyingItemCount(10);
    buy();
    exitShop();
    
    down();
    left(3)
    down(2)
    right();
    down();
    right();
    
    muRen();
    
    left();
    up();
    left();
    up(2)
    left(3)
    up();
    
    // 点击: 伙计
    choosePeople(2);
    // 点击: 买卖
    clickOnButtonUnderTheDialog();
    // 点击：鱼饵
    chooseBuyItem(8)
    increaseBuyingItemCount(1);
    buy();
    exitShop();
    
    down()
    left(14)
    down(3)
    right(2)
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
        up(2)
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
        right(2)
        up(2);
        sleep(2000);
        up();
        right()
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
    up(3)
    left(6)
    up(7)
    left(12)
    down(5)
    left(6)
    down(4)
    
    function fuBen() {
        // 点击: 老木匠
        choosePeople(3);
        // 点击: 墨门遗迹
        clickOnButtonUnderTheDialog();
        sleep(3000)
        // 点击： 挑战
        clickOnButtonUnderTheDialog();
        sleep(3000)
        clickCenter(0);
        sleep(5000)

        // 进去：废墟
        click(278, 365)
        sleep(5000)
    
        function baoXiang() {
            // 点击: 宝箱
            choosePeople(2);
            sleep(2000)
            // 点击： 打开
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
        sleep(3000)
        click(636, 217);
        sleep(4000);
        left();
        up(2)
        sleep(3000);
    
        baoXiang()
    
        down(2)
        left()
        down(3)
        left(3)
        up()
        left()
        sleep(3000);
    
        baoXiang()
    
        right(2)
        down()
        right(3)
        down(2)
        right(2)
        down(4)
        sleep(5000);
        clickCenter()

        baoXiang()

        up(4)
        right(3)
        up(2)
        left(2)
        sleep(5000)

        // 点击： 进门
        clickOnButtonUnderTheDialog();
        sleep(5000)

        // 进去： 明鬼塔第一层
        up(2)
        sleep(3000)
        click(1065, 435)
        sleep(5000)

        // 进去： 明鬼塔第二层
        up(2)

        baoXiang()

        down();
        left()
        sleep(2000)
        // 点击： 是
        clickOnButtonUnderTheDialog();
        sleep(3000)
    }
    
    fuBen()

    up(4);
    right(6);
    up(6)
    right(12)
    up(12)
    right(4)
    down()
    right(2)
    up(5)
    left(2)
    up(2)
    left(2)
    up(10)
    right(3)
    up(3)
    sleep(8000)
}

function youZhou() {
    up(15)
    right(7)
    down(3)
    left()
    
    utils.meiHuaZhuang();
    
    right(2)
    down()
    
    muRen();
    
    left()
    up(4)
    left(8)
    
    // 点击: 施必救
    choosePeople(2);
    // 点击: 买卖
    clickOnButtonUnderTheDialog();
    // 点击：甘草
    chooseBuyItem(3)
    increaseBuyingItemCount(10);
    buy();
    // 点击：茯苓
    chooseBuyItem(4)
    increaseBuyingItemCount(5);
    buy();
    // 白芍
    chooseBuyItem(5)
    increaseBuyingItemCount(2);
    buy();
    exitShop();
    
    right()
    up(7)
    left()

    // 到周掌柜了
    right(5)
    up(3)
    right()
    up()
    right()

    // 点击: 地牢入口
    choosePeople(2);
    sleep(5000)

    // 到地牢了
    left(6)
    up()
    left()

    // 点击: 狱卒
    choosePeople(2);
    // 点击：笼斗
    clickOnButtonUnderTheDialog();
    sleep(4000)
    // 点击：参与笼斗
    clickOnButtonUnderTheDialog();
    sleep(4000)
    // 点击：对战囚徒
    clickOnButtonUnderTheDialog();
    sleep(5000)
    clickCenter()
    sleep(5000)
    clickCenter()
    sleep(8000)
    clickCenter()
    sleep(2000)

    right(2)
    down(3)
    sleep(6000)
     // 点击：开锁
    clickOnButtonUnderTheDialog();  
    sleep(3000)

    down(2)
    right(2)
    down(2)
    left()

    // 点击: 玩家
    choosePeople(2);
    // 点击：笼斗
    clickOnButtonUnderTheDialog();
}

shiFangJi();

// 到敦煌了

dunHuang();

// 到华山了

huaShan()

// 到落霞镇了

luoXiaZhen();

// 到洛阳了

luoYang();

// 到南阳渡了

nanYangDu();

// 到双王镇了

shuangWangZhen();

// 到凤鸣集了

fengMingJi();

// 到成都了

chenDu();

// 到凤鸣集了

// 从凤鸣集到龙泉镇

fengMingJiDaoLongQuanZhen();

// 到龙泉镇了

longQuan();

// 到杭州了

hangZhou();

// 到泉州了

quanZhou();

// 到杭州了

hangZhouDaoGuSu()

// 到姑苏了

guSu();

// 到泰山了
taiShan();

// 到幽州了
youZhou()
