import React from 'react';
import {observer} from 'mobx-react';
import {FlatList,View} from 'react-native';
import {TextRegular} from "src/ui";
import {extras,whyRun} from 'mobx';
import {Post} from "src/logic/posts/model";

interface PostsSceneProperties {
    posts?:Post[],
    refreshing?:boolean,
    refreshPosts?:()=>Promise<any>
}

@observer
class PostItem extends React.Component<{post:Post}> {

    render(){
        const {post} = this.props;
        const res = <View style={{borderColor:"black", padding:10,borderBottomWidth:2}}>
            <TextRegular>{post.title}</TextRegular>
            <TextRegular>by {post.user.name}</TextRegular>
            <TextRegular>{post.body}</TextRegular>
        </View>;
        return res;
    }
}
@observer
export class PostsScene extends React.Component<PostsSceneProperties> {

    componentDidAppear = ()=>{
        this.props.refreshPosts();
    };
    _keyExtractor = (item)=>item.id;
    _renderItem = ({item})=>{
        return <PostItem post={item} />
    };
    render() {
        const {posts,refreshing,refreshPosts} = this.props;
        return <View>
            <FlatList data={posts} keyExtractor={this._keyExtractor}
                         renderItem={this._renderItem} onRefresh={refreshPosts}
                         refreshing={refreshing}
        />
        </View>
    }
}