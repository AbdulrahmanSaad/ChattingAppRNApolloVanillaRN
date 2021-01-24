import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
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

    constructor(props){
        super(props);
        this.state = {
            showModal: false,
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
                    showModal: true,
                    errMsg: error
                })
            }

            else navigate('Login')

        }).catch()
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {

        const {
            email,
            password
        } = this.props.store

        const {
            showModal,
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                >
                    <Text
                    style={modalText}
                    >
                        {errMsg}
                    </Text>
                    <ButtonComponent
                    title={"Close"}
                    onPress={() => this.closeModal()}
                    />
                </Modal>
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

const styles = StyleSheet.create({
    modalText: {
        textAlign: "center",
        marginTop: 300
    },
    modalButton: {
        width: 150
    }
})
const SignupScreen = inject("store")(observer(SignupWindow));
export { SignupScreen };