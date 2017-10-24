/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {FormLayout,PageTitle,TextRegular,StandardInput,CTAButton,TextError} from 'src/ui';

export interface LoginSceneProperties {
    submit: (credentials:{username,password})=>Promise<any>
}
export class LoginScene extends React.Component<LoginSceneProperties,any> {
    state:any = {
        username:"",
        password:"",
        loading:false,
        error:null
    };

    onSubmit = async ()=>{
        const {username,password} = this.state;
        try {
            this.setState({
                loading:true,
                error:null
            });
            await this.props.submit({username,password});

            this.setState({
                loading:false
            })
        } catch (e){
            this.setState({
                error:e.message,
                loading:false
            })
        }
    };
    render() {
        const {username,password,loading,error} = this.state;
        return (
            <FormLayout>
                <PageTitle>My App!</PageTitle>
                <TextRegular>
                    Please enter your credentials to login.
                </TextRegular>
                <TextRegular small>
                    (hint: guest/guest)
                </TextRegular>
                <StandardInput value={username} label="Username" editable={!loading}
                               onChangeText={(username)=>this.setState({username})}/>
                <StandardInput value={password} label="Password" secureTextEntry editable={!loading}
                               onChangeText={(password)=>this.setState({password})}/>

                {error && <TextError>{error}</TextError>}
                <CTAButton onPress={this.onSubmit} loading={loading}>
                    Login
                </CTAButton>

            </FormLayout>
        );
    }
}