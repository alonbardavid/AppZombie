import './logic/navigation/routes';
import router from 'intent-router';
try {
    router.startApp().catch(e => console.error(e));
} catch(e){
    console.error(e);
}