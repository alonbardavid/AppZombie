import 'src/logic/navigation/routes';
import {router} from 'src/logic/navigation/router';
import codePush from "react-native-code-push";
import config from 'config';
import {Platform} from 'react-native';
try {
    codePush.sync({
        installMode: codePush.InstallMode.IMMEDIATE,
        checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
        deploymentKey:Platform.OS === "ios"?
            config.IOS_CODE_PUSH_KEY:
            config.ANDROID_CODE_PUSH_KEY
    } as any);
    router.startApp().catch(e => console.error(e));
} catch(e){
    console.error(e);
}