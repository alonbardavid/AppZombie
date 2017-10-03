//import './logic/routes';
//import {startApp} from 'intent-router/module';
/*try {
    startApp().catch(e => console.error(e));
} catch(e){
    console.error(e);
}*/
import {Navigation} from 'react-native-navigation';
import {RootScene} from 'src/scenes/root';

console.log("hey")
Navigation.registerComponent('AppZombie', () => RootScene);
Navigation.startSingleScreenApp({
    screen:{
        screen:"AppZombie",
        navigatorStyle:{
            navBarHidden:true
        }
    }
})