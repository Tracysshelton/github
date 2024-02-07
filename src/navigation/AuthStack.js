import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOption={{headerShown:false}}>
            <Stack.Screen component={Splash} name="Splash" />
            <Stack.Screen component={Login} name="Login" />
        </Stack.Navigator>
    )
}

export default AuthStack;