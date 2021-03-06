import React from 'react';
import {observer} from 'mobx-react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {UserProfile} from "src/logic/profile/model";

interface HomeSceneProperties {
    user?:UserProfile
}
@observer
export class HomeScene extends React.Component<HomeSceneProperties> {
    render() {
        const {user} = this.props;
        return (
            <View style={styles.container}>
                <Text style={[styles.welcome,{paddingBottom:10}]}>
                    Welcome {user && user.name}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
