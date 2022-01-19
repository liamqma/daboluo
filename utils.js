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

module.exports = {
    choosePeople: choosePeople,
    clickOnButtonUnderTheDialog: clickOnButtonUnderTheDialog,
    up: up,
    down: down,
    left: left,
    right: right,
    clickCenter: clickCenter,
    meiHuaZhuang: meiHuaZhuang
}