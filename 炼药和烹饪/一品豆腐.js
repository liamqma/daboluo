var utils = require("./utils");
var cook = utils.cook;

var number = parseInt(rawInput("请输入次数"));

toast("循环" + number + "次");
sleep(2000);

function start() {
  toast("点击菜谱");
  click(1163, 378);
  sleep(1000);

  swipe(556, 833, 556, 352, 1000);
  sleep(2000);

  toast("一品豆腐");
  click(625, 663);
  sleep(1000);

  toast("确认菜谱");
  click(1320, 809);
  sleep(1000);

  cook(780);
}

for (var count = 1; count <= number; count++) {
  start();
}
