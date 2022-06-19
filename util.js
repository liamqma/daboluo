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

function topRight(time) {
  swipe(200, 800, 300, 700, time);
}

function topLeft(time) {
  swipe(200, 800, 100, 700, time);
}

function bottomRight(time) {
  swipe(200, 800, 300, 900, time);
}

function bottomLeft(time) {
  swipe(200, 800, 100, 900, time);
}

function jianDongXi(time) {
  if (!time) time = 1000;
  toast("捡东西");
  bottomLeft(time);
  topRight(2 * time);
  bottomLeft(time);
  topLeft(time);
  bottomRight(2 * time);
  topLeft(time);
  sleep(500);
}

function yuanDiZou(time) {
  if (!time) time = 1000;
  var random = Math.random();
  if (random > 0.75) {
    bottomLeft(time);
    topRight(time);
  } else if (random > 0.5) {
    topRight(time);
    bottomLeft(time);
  } else if (random > 0.25) {
    topLeft(time);
    bottomRight(time);
  } else {
    bottomRight(time);
    topLeft(time);
  }
}

function waitForImage(img, interval, maxRetry, options) {
  if (!interval) interval = 1000;
  if (!maxRetry) maxRetry = 99;
  if (!options) options = { threshold: 0.7 };
  for (var count = 1; count <= maxRetry; count++) {
    var p = findImage(captureScreen(), img, options);
    if (p) return p;
    sleep(interval);
  }
  return null;
}

function waitForImages(images, interval, maxRetry, options) {
  if (!interval) interval = 1000;
  if (!maxRetry) maxRetry = 99;
  if (!options) options = { threshold: 0.7 };
  for (var count = 1; count <= maxRetry; count++) {
    var screenshot = captureScreen();
    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      var p = findImage(screenshot, img, options);
      if (p) return { p: p, i: i };
    }
    sleep(interval);
  }
  return null;
}

module.exports = {
  heXue: heXue,
  attack: attack,
  firstSkill: firstSkill,
  secondSkill: secondSkill,
  thirdSkill: thirdSkill,
  fourthSkill: fourthSkill,
  topRight: topRight,
  topLeft: topLeft,
  bottomRight: bottomRight,
  bottomLeft: bottomLeft,
  jianDongXi: jianDongXi,
  yuanDiZou: yuanDiZou,
  waitForImage: waitForImage,
  waitForImages: waitForImages,
};
