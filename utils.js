function choosePeople(number) {
    sleep(1000);
    switch(number) {
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
    if(!number) number = 1;
    switch(number) {
        case 1:
            click(1209, 476);
            break;
        case 2:
            click(1204, 595);
            break;
        case 3:
            click(1204, 693);
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
        click(979, 574);
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
    for(let i = 0; i < 20; i++) {
        press(1248, 522, 1000);
        sleep(2000)
    }
    click(1735, 807);
    sleep(2000);
}

function chengDuFuBen() {
    left()
    up()
    // 点击：董三川
    choosePeople(2);
    // 点击: 天一教
    clickOnButtonUnderTheDialog();
    sleep(4000)
    // 点击：挑战
    clickOnButtonUnderTheDialog();
    sleep(4000)
    clickCenter()
    sleep(4000)
    clickCenter()
    sleep(8000)

    click(1470, 871)
    sleep(4000)
    right(2)
    up(1)
    right(1)
    toast('第一个敌人')
    clickCenter()
    sleep(30000)
    
    right(9)
    up(2)
    sleep(3000)
    toast('第二个敌人')
    clickCenter()
    sleep(120000)
    toast('第二个敌人结束')

    down(2)
    left(10)
    down()
    left(7)
    click(338, 438)
    sleep(3000)
    // 点击：确认
    clickOnButtonUnderTheDialog();
    sleep(4000)
    // 点击：确认离开
    clickOnButtonUnderTheDialog();
    sleep(8000)

    right()
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
    chengDuFuBen: chengDuFuBen
}