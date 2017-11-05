import 'src/logic/navigation/routes';
import {router} from 'src/logic/navigation/router';
try {
    router.startApp().catch(e => console.error(e));
} catch(e){
    console.error(e);
}