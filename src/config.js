import {CC} from './globals';

const Config = {
  adjustViewPort: true,
  resolutionPolicy: CC.ResolutionPolicy.SHOW_ALL,
  resizeWithBrowser: true,
  enableRetina: CC.sys.os === CC.sys.OS_IOS ? true : false,

  width: 960,
  height: 640
};

export default Config;
