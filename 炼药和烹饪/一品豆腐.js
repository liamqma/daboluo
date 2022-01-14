var utils = require('./utils');
var cook = utils.cook;

function start() {
    // 点击：菜谱
    click(1163, 378)
    sleep(1000)

    swipe(556, 833, 556, 352, 1000)
    sleep(2000)

    // 点击：一品豆腐
    click(740, 808)
    sleep(1000)

    // 点击：确认菜谱
    click(1320, 809)
    sleep(1000)

    cook(780);
}

for(var count=1; count<=20; count++) {
    start();
}





