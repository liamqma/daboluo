var util = require("./util");
var heXue = util.heXue;
var attack = util.attack;
var firstSkill = util.firstSkill;
var secondSkill = util.secondSkill;
var thirdSkill = util.thirdSkill;
var fourthSkill = util.fourthSkill;

var numAlreadyDone = 1;

while (true) {
  firstSkill();
  secondSkill();
  thirdSkill();
  attack(24000);
  numAlreadyDone++;
  if (numAlreadyDone % 5 === 0) {
    heXue();
  }
}
