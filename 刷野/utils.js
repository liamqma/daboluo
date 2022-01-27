// utils
var utils = require('../utils');
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;

function anQi() {
    sleep(8000)
    click(278, 876)
    sleep(1000)
    click(682, 876)
    sleep(1000)
    click(1144, 876)
    sleep(1000)
    click(1580, 876)
    sleep(70000)
    toast("战斗结束")
}

function start() {
    down();
    anQi()

    for(var i = 0; i < 50; i++) {
        down()
        left(3)
        anQi()
        
        right(3)
        up()
        anQi()
    }
}

function kuaiSu() {
    down();
    sleep(2000)

    for (var count = 0; count < 50; count ++) {
        down()
        left(3)
        sleep(3000)

        click(716, 801)
        sleep(5000)

        click(1064, 852)
        sleep(5000)

        click(1384, 384)
        sleep(5000)

        left(4)
        up(2)
        sleep(3000)
    }
}

module.exports = {
    start: start,
    kuaiSu: kuaiSu,
}

