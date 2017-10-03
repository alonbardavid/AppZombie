import {addMode,addRoute} from 'intent-router/module';
import {RootScene} from "src/scenes";

addRoute({
    when:"INIT",
    resolve:async ()=>{
        return {
            mode:"app",
            screen:RootScene
        }
    }
});

addMode("app",{
});
