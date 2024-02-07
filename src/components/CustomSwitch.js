import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode)
    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }
    return (
        <View style={styles.switchContiner}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 1 ? '#AD40EF' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        backgroundColor: getSelectionMode == 1 ? '#AD40EF' : '#e4e4e4',
                        fontSize: 14
                    }}
                >{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 2 ? '#AD40EF' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        backgroundColor: getSelectionMode == 2 ? '#AD40EF' : '#e4e4e4',
                        fontSize: 14
                    }}
                >{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    switchContiner: {
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#AD40EF',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default CustomSwitch;