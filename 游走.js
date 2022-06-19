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

var numAlreadyDone = 1;
var time = 5000;

while (true) {
  firstSkill();
  secondSkill();
  thirdSkill();
  fourthSkill();
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
  numAlreadyDone++;
  if (numAlreadyDone % 10 === 0) {
    heXue();
  }
}
