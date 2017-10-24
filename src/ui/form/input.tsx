import React from 'react';
import {TextInput,StyleSheet,TextInputProperties,View} from 'react-native';
import {TextRegular} from 'src/ui/text';
import {colors,sizes} from 'src/ui/theme';

export interface StandardInputType extends TextInputProperties {
    label?:string
}
export class StandardInput extends React.PureComponent<StandardInputType>{

    render(){
        const {style,label,...rest} = this.props;
        return <View style={styles.standardInputContainer}>
            <TextRegular style={styles.standardInputLabel}>{label}</TextRegular>
            <TextInput style={[styles.standardInputText,style]}{...rest} />
        </View>
    }
}


const styles = StyleSheet.create({
    standardInputContainer:{

    },
    standardInputLabel:{

    },
    standardInputText:{
        color:colors.text,
        fontSize:sizes.text
    }
});