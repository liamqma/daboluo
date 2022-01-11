// utils
var utils = require('utils');
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;

function anQi() {
    sleep(5000)
    click(1052, 857)
    sleep(20000)
}

for(var i = 0; i < 10; i++) {
    down()
    left(3)
    sleep(3000)
    anQi()
    
    click(711, 814)
    sleep(5000)
    anQi()
    
    right(4)
    down(2)
    sleep(3000)
    anQi()
    
    up(4)
    right()
    sleep(3000)
    anQi()
    
    left(4)
    up(2)
    sleep(3000)
    anQi()
}
