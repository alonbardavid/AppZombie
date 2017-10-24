import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {withKnobs,object,boolean} from '@storybook/addon-knobs';
import {PostsScene} from './'
import {makePost} from "src/logic/posts/model-factory";
declare var module;
const posts = [makePost(),makePost(),makePost(),makePost()];
storiesOf('scenes', module).addDecorator(withKnobs)
    .add('posts', () => {
        return <PostsScene posts={object("posts",posts)}
                           refreshing={boolean("refreshing",false)}
                           refreshPosts={action("refreshPosts")}
        />
    });
