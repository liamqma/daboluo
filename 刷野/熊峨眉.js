if (!requestScreenCapture()) {
  toast("请求截图失败");
  exit();
}

var number = Math.ceil(parseInt(rawInput("请输入体力")) / 6);
toast("运行" + number + "次");

var img = images.read("引熊出洞.jpeg");
var imgTiger = images.read("熊.jpeg");
var utils = require("../utils");

for (var count = 0; count < number; count++) {
  var screenshot = undefined;
  var foundTiger = undefined;
  var tigerP = undefined;
  var left = utils.left;
  var right = utils.right;
  var xuanWuPin = utils.xuanWuPin;
  var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;

  while (!foundTiger) {
    left();
    sleep(3000);
    screenshot = captureScreen();
    foundTiger = findImage(screenshot, img);

    if (!foundTiger) {
      right();
      sleep(3000);
      screenshot = captureScreen();
      foundTiger = findImage(screenshot, img);
    }
  }

  clickOnButtonUnderTheDialog(1);
  xuanWuPin(1);

  sleep(2000);

  screenshot = captureScreen();
  tigerP = findImage(screenshot, imgTiger, { threshold: 0.7 });

  if (tigerP) {
    click(tigerP.x, tigerP.y);
    sleep(5000);
  }
}
