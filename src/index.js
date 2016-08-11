import {CC, Document} from './constants/globals';
import Resources from './constants/resources';
import Config from './constants/config';
import HelloWorldScene from './scenes/HelloWorldScene';

const gameResourcesToLoad = Resources.getResourceMeta();

// Experimental!! assuming cc.game.onStart has fired
if (!CC.sys.isNative && Document.getElementById('cocosLoading')) {
  Document.body.removeChild(Document.getElementById('cocosLoading'));
}

// Pass true to enable retina display, on Android disabled by default to improve performance
CC.view.enableRetina(Config.enableRetina);

// Adjust viewport meta
CC.view.adjustViewPort(Config.adjustViewPort);

// Uncomment the following line to set a fixed orientation for your game
// CC.view.setOrientation(CC.ORIENTATION_PORTRAIT);

// Setup the resolution policy and design resolution size
CC.view.setDesignResolutionSize(Config.width, Config.height, Config.resolutionPolicy);

// The game will be resized when browser size change
CC.view.resizeWithBrowserSize(Config.resizeWithBrowser);

// load resources and then the first scene
CC.LoaderScene.preload(gameResourcesToLoad, function () {
  CC.director.runScene(new HelloWorldScene());
}, this);

console.log('bootstrapped game');
console.log('game started');
