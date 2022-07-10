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
var yuanDiZou = util.yuanDiZou;

var numAlreadyDone = 1;

while (true) {
  firstSkill();
  secondSkill();
  thirdSkill();
  attack(5000);
  numAlreadyDone++;
  if (numAlreadyDone % 5 === 0) {
    heXue();
  }
}
