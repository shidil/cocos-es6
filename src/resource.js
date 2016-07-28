const Resources = {
  HelloWorldPNG: 'res/HelloWorld.png'
};

const gameResourcesToLoad = [];
for (let i in Resources) {
  if (Resources.hasOwnProperty(i)) {
    gameResourcesToLoad.push(Resources[i]);
  }
}

window.g_resources = gameResourcesToLoad; // eslint-disable-line no-undef,camelcase
export default Resources;
