import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const RecipeDetails = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>{route.params?.title}</Text>
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

export default RecipeDetails;