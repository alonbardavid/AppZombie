/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require */

import { getStorybookUI, configure } from '@storybook/react-native';
import { setOptions } from '@storybook/addon-options';
import {Navigation} from 'react-native-navigation';
declare var module;

// import your stories
configure(function() {
    require('./stories');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: false });
Navigation.registerComponent('storybook', () => StorybookUI);
Navigation.startSingleScreenApp({
    screen:{
        screen:"storybook",
        navigatorStyle:{
            navBarHidden:true
        }
    }
})