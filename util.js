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

module.exports = {
  heXue: heXue,
  attack: attack,
  firstSkill: firstSkill,
  secondSkill: secondSkill,
  thirdSkill: thirdSkill,
  fourthSkill: fourthSkill,
};
