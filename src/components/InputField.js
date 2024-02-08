import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const InputField = ({label, inputType, keyboardType,fieldButtonLabel,fieldButtonFunction}) => {
    return (
        <View style={{
            flexDirection:'row', 
            borderBottomColor: '#ccc', 
            borderBottomWidth:1,
            paddingBottom:8,
            marginBottom:25,
        }}>
            {inputType == 'password' ? (<TextInput 
                placeholder={label} 
                keyboardType={keyboardType}
                style={{flex:1, paddingVertical:0}} 
                secureTextEntry={true}
            />) : (
                <TextInput
                placeholder={label} 
                keyboardType={keyboardType}
                style={{flex:1, paddingVertical:0}}
                />
            )}
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{color: '#AD40AF'}}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputField;