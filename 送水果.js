var utils = require("utils");
for (var count = 1; count <= 177; count++) {
  utils.choosePeople(2);

  utils.clickOnButtonUnderTheDialog(2);

  click(1284, 275);

  sleep(1000);

  swipe(1110, 762, 1110, 393, 1000);
  swipe(1110, 762, 1110, 393, 1000);
  swipe(1110, 762, 1110, 393, 1000);
  swipe(1110, 762, 1110, 393, 1000);

  click(1240, 753);
  sleep(1000);
  click(1400, 654);
  sleep(6000);
  utils.clickCenter();
  sleep(3000);
}
