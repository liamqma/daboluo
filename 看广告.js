click(61, 74);
sleep(2000);
click(61, 74);
sleep(10000);

console.log("免费好礼");
click(86, 458);
sleep(10000);

for (var count = 1; count <= 2; count++) {
  console.log("观看广告");
  click(812, 498);
  sleep(2 * 60 * 1000);

  console.log("关闭");
  click(1748, 126);
  sleep(3000);
}

console.log("复制序号");
click(830, 569);
sleep(1000);

console.log("关闭窗口");
click(749, 70);
sleep(2000);

console.log("菜单");
click(1839, 179);
sleep(2000);

console.log("输入激活码");
click(969, 290);
sleep(2000);

console.log("粘贴");
click(1184, 603);
sleep(2000);

console.log("确定");
click(1137, 727);
sleep(5000);

console.log("确认");
click(970, 718);
sleep(2000);
