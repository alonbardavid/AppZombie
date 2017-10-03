import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {RootScene} from './'
declare var module;

storiesOf('scenes', module).add('root', () => {
    return <RootScene />
});
