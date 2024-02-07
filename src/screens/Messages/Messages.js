import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Messages = () => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})

export default Messages;