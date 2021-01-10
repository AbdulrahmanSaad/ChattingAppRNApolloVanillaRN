import React,{ Component} from 'react';
import {
    TextInput
} from 'react-native';

class TextInputComponent extends Component {

    onChange = (value) => {
        const {
            onChange
        } = this.props;

        if (onChange){
           onChange(value);
        }
    }
    render (){
        const {
            placeholder,
            value,
            style,
            testID
        } = this.props;
        return (
            <TextInput
            testID={testID}
            placeholder={placeholder ? placeholder : ''}
            onChangeText={this.onChange}
            value={value}
            style={style ? style : null}
            />
        )
    }
}

export {TextInputComponent};