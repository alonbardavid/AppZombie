import './logic/navigation/routes';
import {startApp} from 'intent-router/src/intent-router';
try {
    startApp().catch(e => console.error(e));
} catch(e){
    console.error(e);
}