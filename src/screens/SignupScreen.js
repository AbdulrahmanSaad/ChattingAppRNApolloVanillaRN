import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'
import {
    TextInputComponent,
    ButtonComponent
} from '../components/Index';
import { inject, observer } from "mobx-react";
import {
    Mutation
} from 'react-apollo';
import SignupMutation from '../Mutations/SignupMutation';

class SignupWindow extends Component {

    handleEmail = (email) => {
        this.props.store.setEmail(email)
    }

    handlePassword = (password) => {
        this.props.store.setPassword(password)
    }

    onPress = (signup) => {

        const {
            navigate
        } = this.props.navigation

        signup().then((res) => {

            const {
                error
            } = res.data.createUser

            if (error){
                alert(error)
            }

            else navigate('Login')

        }).catch()
    }

    render (){

        const {
            email,
            password
        } = this.props.store

        return (
            <View>
                <Text testID={"signup"}>
                    Signup
                </Text>
                <TextInputComponent
                    testID={"emailTextInput"}
                    placeholder={'email'}
                    onChange={this.handleEmail}
                    vlaue={email}
                />
                <TextInputComponent
                    testID={"passwordTextInput"}
                    placeholder={'password'}
                    onChange={this.handlePassword}
                    value={password}
                />
                <Mutation
                    variables={{
                        email,
                        password
                    }}
                    mutation={SignupMutation}
                >
                    {mutate => {
                        return (
                            <ButtonComponent
                                testID={"signupButton"}
                                title={'Signup'}
                                onPress={() => this.onPress(mutate)}
                            />
                        )
                    }}

                </Mutation>
            </View>
        )
    }
}

const SignupScreen = inject("store")(observer(SignupWindow));
export {SignupScreen};