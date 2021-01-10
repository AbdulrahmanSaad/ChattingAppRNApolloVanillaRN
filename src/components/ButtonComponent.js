import React,{ Component} from 'react';
import {
    Button
} from 'react-native';

class ButtonComponent extends Component {

    onPress = () => {

        const {
            onPress
        } = this.props;

        if (onPress){
            onPress();
        }
    }

    render (){
        const{
            title,
            style,
            testID
        } = this.props
        return (
            <Button
            testID={testID}
            title={title ? title : 'Press'}
            onPress={this.onPress}
            style={style ? style : null}
            />
        )
    }
}

export {ButtonComponent};