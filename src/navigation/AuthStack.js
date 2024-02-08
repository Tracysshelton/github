import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'
import Splash from '../screens/Splash';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOption={{headerShown:false}}>
            <Stack.Screen component={Splash} name="Splash" />
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen component={Register} name="Register" />
        </Stack.Navigator>
    )
}

export default AuthStack;