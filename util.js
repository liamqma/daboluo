function heXue() {
  toast("喝血");
  click(1770, 500);
  sleep(500);
}

function attack(time) {
  toast("attack");
  press(1700, 840, time);
}

function firstSkill() {
  toast("1st skill");
  click(1496, 919);
  sleep(500);
}

function secondSkill() {
  toast("2st skill");
  click(1504, 762);
  sleep(500);
}

function thirdSkill() {
  toast("3st skill");
  click(1603, 641);
  sleep(500);
}

function fourthSkill() {
  toast("4th skill");
  click(1766, 644);
  sleep(500);
}

function northEast(time) {
  swipe(200, 800, 300, 700, time);
}

function northWest(time) {
  swipe(200, 800, 100, 700, time);
}

function southEast(time) {
  swipe(200, 800, 300, 900, time);
}

function southWest(time) {
  swipe(200, 800, 100, 900, time);
}

function jianDongXi() {
  var time = 1000;
  toast("捡东西");
  southWest(time);
  northEast(2 * time);
  southWest(time);
  northWest(time);
  southEast(2 * time);
  sleep(500);
}

module.exports = {
  heXue: heXue,
  attack: attack,
  firstSkill: firstSkill,
  secondSkill: secondSkill,
  thirdSkill: thirdSkill,
  fourthSkill: fourthSkill,
  northEast: northEast,
  northWest: northWest,
  southEast: southEast,
  southWest: southWest,
  jianDongXi: jianDongXi,
};
