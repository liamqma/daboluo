var utils = require('./utils');
var clickOnFire = utils.clickOnFire;

var imgBar = images.read("bar.jpeg");

clickOnFire();
sleep(1000);
clickOnFire();

for(var i=0; i<= 40; i++) {
    var screenshot = captureScreen();
    var pBar = findImage(screenshot, imgBar, { region: [ 625, 770, 600, 40 ], threshold: 0.8 });
    var firstMarkX = 877;

    if(pBar && pBar.x - firstMarkX < 30){
        clickOnFire();
    }
    
    sleep(500)
}


imgBar.recycle();



