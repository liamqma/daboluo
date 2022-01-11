var utils = require('./utils');
var fishing = utils.fishing;

var imgHooked = images.read("姑苏hooked.png");

fishing(imgHooked);

imgHooked.recycle();