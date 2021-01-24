import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import {
    TextInputComponent,
    ButtonComponent
} from '../components/Index'
import { inject, observer } from "mobx-react";

import {
    Query,
    Mutation
} from 'react-apollo';
import MessagesQuery from '../Query/MessagesQuery';
import MessageMutation from '../Mutations/MessageMutation';
import { gql } from "apollo-boost";

const newMessage = gql`
  subscription {
    message {
        _id
        text
    }
  }
`;

let unsubscribe = null;

class ChatWindow extends Component {

    renderItem = () => {
        const{
            messages
        } = this.props.store

        return <FlatList
            data={messages ? messages : null}
            renderItem={
                ({ item }) => {
                    return (
                        <Text
                            style={{
                                width: 300,
                                marginVertical: 20
                            }}
                        >
                            {item.text}
                        </Text>
                    )
                }
            }
            style={{
                height: 400,
                position: 'absolute',
                alignSelf: 'center',
                bottom: 20
            }}
            keyExtractor={item => item._id}
            inverted
        />
    }

    onChange = (message) => {
        this.props.store.setMessage(message);
    }

    onPress = (sendMessage) => {
        sendMessage().then(this.props.store.setMessage(''))
    }

    render() {

        const {
            messageText
        } = this.props.store
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}
            >
                <View>
                    <Query
                        query={MessagesQuery}
                    >
                        {({ loading, data, subscribeToMore }) => {
                            if (loading) {
                                return null;
                            }

                            if (!unsubscribe) {
                                unsubscribe = subscribeToMore({
                                    document: newMessage,
                                    updateQuery: (prev, { subscriptionData }) => {
                                        if (!subscriptionData.data) return prev;
                                        const { message } = subscriptionData.data;
                                        return {
                                            ...prev,
                                            messages: [...prev.messages, message]
                                        };
                                    }
                                });
                            }
                            const {
                                messages
                            } = data

                            let _messages = [...messages]
                            this.props.store.setData(_messages)
                            return this.renderItem()
                        }}
                    </Query>
                </View>
                <TextInputComponent
                    testID={"messageTextInput"}
                    onChange={this.onChange}
                    style={{
                        width: '100%',
                        height: 30,
                        marginTop: 10
                    }}
                    value={messageText}
                    placeholder={'Message'}
                />
                <Mutation
                    mutation={MessageMutation}
                    variables={{
                        text: messageText
                    }}
                >
                    {
                        mutate => {
                            return <ButtonComponent
                                testID={"sendButton"}
                                title={'Send'}
                                onPress={() => this.onPress(mutate)}
                            />
                        }
                    }
                </Mutation>
            </View>
        )
    }
}

const ChatScreen = inject("store")(observer(ChatWindow));

export { ChatScreen };