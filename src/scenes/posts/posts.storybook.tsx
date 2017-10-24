import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {PostsScene} from './'
declare var module;

storiesOf('scenes', module).add('posts', () => {
    return <PostsScene />
});
