import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
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

    constructor(props) {
        super(props);
        this.state = {
            errMsg: ""
        }
    }

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

            if (error) {
                this.setState({
                    errMsg: error
                })
            }

            else navigate('Login')

        }).catch()
    }

    render() {

        const {
            email,
            password
        } = this.props.store

        const {
            errMsg
        } = this.state

        const {
            modalText
        } = styles

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

                <Text
                    testID={"errMsgText"}
                    style={modalText}
                >
                    {errMsg}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalText: {
        textAlign: "center",
        marginTop: 50
    }
})
const SignupScreen = inject("store")(observer(SignupWindow));
export { SignupScreen };