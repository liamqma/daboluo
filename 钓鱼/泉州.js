var utils = require('./utils');
var fishing = utils.fishing;

var imgHooked = images.read("泉州hooked.jpeg");

fishing(imgHooked);

imgHooked.recycle();