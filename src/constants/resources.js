/**
 * @author Shidil Eringa
 */
const Resources = {
  HelloWorldPNG: 'res/HelloWorld.png'
};

/**
 * @description Forms urls of resources to load.
 * @return {object} url array
 */
Resources.getResourceMeta = () => {
  let gameResourcesToLoad = [];
  for (let i in Resources) {
    if (Resources.hasOwnProperty(i)) {
      gameResourcesToLoad.push(Resources[i]);
    }
  }
};

export default Resources;
