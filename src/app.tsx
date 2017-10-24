import './logic/routes';
import {startApp} from 'intent-router/module';
try {
    startApp().catch(e => console.error(e));
} catch(e){
    console.error(e);
}