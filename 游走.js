if (!requestScreenCapture()) {
  toast("请求截图失败");
  exit();
}

var img60 = images.read("60.jpeg");

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
var waitForImage = util.waitForImage;

var numAlreadyDone = 1;
var time = 5000;

while (true) {
  var p = waitForImage(img60, 500, 5, { region: [400, 40, 900, 100] });
  if (p) {
    toast("有怪物");
    firstSkill();
    secondSkill();
    thirdSkill();
    fourthSkill();
    attack(time);
  } else {
    toast("没有怪物");
    var random = Math.random();
    if (random > 0.75) {
      bottomLeft(time);
    } else if (random > 0.5) {
      topRight(time);
    } else if (random > 0.25) {
      topLeft(time);
    } else {
      bottomRight(time);
    }
  }

  numAlreadyDone++;
  if (numAlreadyDone % 10 === 0) {
    heXue();
  }
}
