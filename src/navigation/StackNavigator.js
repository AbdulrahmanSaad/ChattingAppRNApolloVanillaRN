import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SignupScreen,
    LoginScreen,
    ChatScreen
} from '../screens/Index'

const Stack = createStackNavigator();
const {
    Navigator,
    Screen
} = Stack

export default class StackNavigator extends Component {

    render() {
        return (
            <NavigationContainer>
                <Navigator>
                        <Screen
                            name="Signup"
                            component={SignupScreen}
                        />
                        <Screen
                            name="Login"
                            component={LoginScreen}
                        />
                        <Screen
                            name="ChatScreen"
                            component={ChatScreen} />
                </Navigator>
            </NavigationContainer>
        )
    }
}