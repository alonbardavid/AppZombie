import React from 'react';
import {Text, StyleSheet, TextProperties} from 'react-native';
import {sizes,colors} from 'src/ui/theme';



export class PageTitle extends React.PureComponent<TextProperties> {

    render(){
        const {style,children,...rest} = this.props;

        return <Text style={[styles.pageTitle,style]} {...rest} >
            {children}
        </Text>
    }
}
export interface TextRegularProperties extends TextProperties {
    small?:boolean
}
export class TextRegular extends React.PureComponent<TextRegularProperties> {

    render(){
        const {style,small,children,...rest} = this.props;
        return <Text style={[styles.regular,{
            fontSize:small?sizes.textSmall: sizes.text
        },style]} {...rest} >
            {children}
        </Text>
    }
}
export class TextError extends React.PureComponent<TextProperties>{
    render(){
        const {style,children,...rest} = this.props;
        return <Text style={[styles.error,style]} {...rest} >
            {children}
        </Text>
    }
}
const styles = StyleSheet.create({
    pageTitle:{
        color:colors.text,
        fontSize:sizes.pageTitle,
        fontWeight:"bold"
    },
    regular:{
        color:colors.text,
        fontSize:sizes.text
    },
    error:{
        color:colors.error,
        fontSize:sizes.textSmall
    }
});