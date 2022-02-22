if (!requestScreenCapture()) {
  toast("请求截图失败");
  exit();
}

sleep(2000);

var answers = [
  "牛黄",
  "百草之王",
  "雄黄",
  "熊胆",
  "贝母",
  "附子",
  "虎骨",
  "蜈蚣",
  "贝草",
  "白芍",
  "修治",
  "金银花甘寒",
  "茯苓",
  "金银花白色",
  "鳖甲",
  "杜仲",
  "木瓜",
  "何首乌",
  "燕窝",
  "牛膝",
  "龙葵",
  "道家经典",
  "地黄",
  "冬虫夏草",
  "灵芝",
  "当归",
];

var qStartingX = 318;
var qStartingY = 186;
var qWidth = 1000;
var qHeight = 150;
var aStartX = 1020;
var aStartY = 430;
var aWidth = 302;
var aHeight = 413;

var a1StartX = 1059;
var a1StartY = 440;
var a1Width = 220;
var a1Height = 50;
var a2StartY = 551;
var a3StartY = 662;
var a4StartY = 771;

var pQ;
var pA;

for (var count = 1; count <= 10; count++) {
  pQ = undefined;
  pA = undefined;
  var screenshot = captureScreen();
  for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];
    var imgQ = images.read(answer + "q.jpg");
    pQ = findImage(screenshot, imgQ, {
      region: [qStartingX, qStartingY, qWidth, qHeight],
      threshold: 0.7,
    });

    if (pQ) {
      var imgA = images.read(answer + "a.jpg");
      pA = findImage(screenshot, imgA, {
        region: [aStartX, aStartY, aWidth, aHeight],
        threshold: 0.7,
      });
      if (pA) {
        toast("找到答案了");
        sleep(2000);
        click(pA.x + 100, pA.y + 20);
        sleep(5000);
        break;
      }
    }
  }

  if (!pA) {
    var answer = dialogs.select("请选择一个选项", [1, 2, 3, 4]);
    var qClip = images.clip(
      screenshot,
      qStartingX,
      qStartingY,
      qWidth,
      qHeight
    );
    var aClip;
    switch (answer) {
      case 0:
        aClip = images.clip(screenshot, a1StartX, a1StartY, a1Width, a1Height);
        break;
      case 1:
        aClip = images.clip(screenshot, a1StartX, a2StartY, a1Width, a1Height);
        break;
      case 2:
        aClip = images.clip(screenshot, a1StartX, a3StartY, a1Width, a1Height);
        break;
      case 3:
        aClip = images.clip(screenshot, a1StartX, a4StartY, a1Width, a1Height);
        break;
    }
    images.save(qClip, "../../../../q.jpg", "jpg", 100);
    images.save(aClip, "../../../../a.jpg", "jpg", 100);
    toast("保存好图片了");
    break;
  }
}
