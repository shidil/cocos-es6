import Resources from './resource';
import HelloWorldScene from './HelloWorldScene';
import CC from './CC';
const document = window.document; // eslint-disable-line no-undef

const gameResourcesToLoad = [];
for (let i in Resources) {
  if (Resources.hasOwnProperty(i)) {
    gameResourcesToLoad.push(Resources[i]);
  }
}

console.log('game started');
// Experimental!! assuming cc.game.onStart has fired
if (!CC.sys.isNative && document.getElementById('cocosLoading')) {
  document.body.removeChild(document.getElementById('cocosLoading'));
}

// Pass true to enable retina display, on Android disabled by default to improve performance
CC.view.enableRetina(CC.sys.os === CC.sys.OS_IOS ? true : false);

// Adjust viewport meta
CC.view.adjustViewPort(true);

// Uncomment the following line to set a fixed orientation for your game
// CC.view.setOrientation(CC.ORIENTATION_PORTRAIT);

// Setup the resolution policy and design resolution size
CC.view.setDesignResolutionSize(960, 640, CC.ResolutionPolicy.SHOW_ALL);

// The game will be resized when browser size change
CC.view.resizeWithBrowserSize(true);

// load resources
CC.LoaderScene.preload(gameResourcesToLoad, function () {
  CC.director.runScene(new HelloWorldScene());
}, this);

console.log('bootstrapped game');
