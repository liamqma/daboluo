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

module.exports = {
    start: start,
}

