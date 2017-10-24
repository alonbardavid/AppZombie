import React from 'react';
import {TouchableOpacity, TouchableOpacityProperties,StyleSheet,ActivityIndicator,View} from "react-native";
import {TextRegular} from 'src/ui/text';
import {colors,sizes} from 'src/ui/theme';

export interface CTAButtonProperties extends TouchableOpacityProperties {
    loading?:boolean
}
export class CTAButton extends React.PureComponent<CTAButtonProperties>{

    render(){
        const {style,disabled,children,loading,...rest} = this.props;
        return <TouchableOpacity style={[
            styles.buttonContainer, {
                backgroundColor: disabled? colors.button.disabled: colors.button.active
            },style
        ]} disabled={disabled} {...rest} >
            <View>
                {!loading && <TextRegular style={[styles.text,{
                    color:disabled?colors.textReverse: colors.text
                }]} >
                    {children}
                </TextRegular>}
                {loading && <ActivityIndicator size="small" color={colors.text}/>}
            </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        padding:sizes.inputPadding
    },
    text:{
        textAlign:"center"
    }
});