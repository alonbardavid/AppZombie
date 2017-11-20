const BuildVariables = require('./build-variables').default;
import NativeConfig from 'react-native-config';

let JsConfig:configType;
switch (NativeConfig.RELEASE_CHANNEL) {
    case "staging":
        JsConfig = require('./config.staging.json');
        break;
    case "production":
        JsConfig = require('./config.production.json');
        break;
    default:
        JsConfig = require('./config.development.json');
}
const config = Object.assign({},NativeConfig,JsConfig,BuildVariables);
type configType = {
    API_URL:string,
    IOS_CODE_PUSH_KEY:string,
    ANDROID_CODE_PUSH_KEY:string,
    NODE_ENV:string,
    RELEASE_CHANNEL:string,
    GIT_HASH:string
}
export default config;