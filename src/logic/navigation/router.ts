import {IntentRouter} from 'intent-router';
import {RnnIntentRouter} from 'intent-router/module/rnn'

const router = new IntentRouter();
const rnn = new RnnIntentRouter();
rnn.setRouter(router);

const registerScreen = rnn.registerScreen.bind(rnn);

export {registerScreen,router};