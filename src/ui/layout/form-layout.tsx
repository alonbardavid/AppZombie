import React from 'react';
import {ScrollView, StyleSheet, ViewProperties} from "react-native";
import {sizes,colors} from 'src/ui/theme';

export class FormLayout extends React.PureComponent<ViewProperties> {

    render(){
        const {style,children, ...rest} = this.props;
        return <ScrollView style={[styles.formLayoutContainer,style]}
                           contentContainerStyle={styles.formLayoutScrollContentContainer}
                           {...rest} >
            {children}
        </ScrollView>
    }
}

const styles= StyleSheet.create({
    formLayoutContainer:{
        width:"100%",
        height:"100%",
        flex:1,
        padding:sizes.layoutPadding,
        backgroundColor:colors.background
    },
    formLayoutScrollContentContainer:{
        justifyContent:"center"
    }
});
