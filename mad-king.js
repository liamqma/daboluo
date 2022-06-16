var util = require("./util");
var heXue = util.heXue;
var attack = util.attack;
var firstSkill = util.firstSkill;
var secondSkill = util.secondSkill;
var thirdSkill = util.thirdSkill;
var fourthSkill = util.fourthSkill;
var topRight = util.topRight;
var topLeft = util.topLeft;
var bottomRight = util.bottomRight;
var bottomLeft = util.bottomLeft;
var jianDongXi = util.jianDongXi;

while (true) {
  swipe(200, 800, 300, 700, 1000);
  toast("手");
  click(1450, 555);
  sleep(1000);

  toast("enter");
  click(1695, 860);
  sleep(15000);

  toast("快进");
  click(1845, 70);
  sleep(1000);

  topRight(5000);

  heXue();
  for (var i = 0; i < 2; i++) {
    firstSkill();
    secondSkill();
    thirdSkill();
    attack(24000);
  }

  jianDongXi();

  toast("退出");
  click(1440, 230);
  sleep(1000);
  toast("enter");
  click(1165, 670);
  sleep(20000);
}
