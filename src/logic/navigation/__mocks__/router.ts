import {IntentRouter} from 'intent-router';

const router = new IntentRouter();
router.lastAction =  null;

router.onIntent = (intent,command)=>{
    router.lastAction = {intent,command};
    router.setState(command.change);
};

function registerScreen(){}
export {router,registerScreen};