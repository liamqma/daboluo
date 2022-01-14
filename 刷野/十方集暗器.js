// utils
var utils = require('../utils');
var left = utils.left;
var down = utils.down;
var up = utils.up;
var right = utils.right;

function anQi() {
    sleep(8000)
    click(682, 876)
    sleep(60000)
    toast("战斗结束")
}

down()
left(8)
down(4)
left(5)
up(5)
left()
up()
left()
up(2)
left(3)
down(10)
left(2)
down(5)
right(2)
down(2)

down();
anQi()

for(var i = 0; i < 20; i++) {
    down()
    left(3)
    anQi()
    
    right(3)
    up()
    anQi()
}
