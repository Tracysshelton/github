import React from 'react';
import { View, Text } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Feed from '../screens/Feed';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings'
import TabNavigator from './TabNavigator';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOption={{headerShown:false}}>
            <Drawer.Screen component={TabNavigator} name="Home" />
            <Drawer.Screen component={Feed} name="Feed" />
            <Drawer.Screen component={Messages} name="Messages" />
            <Drawer.Screen component={Profile} name="Profile" />
            <Drawer.Screen component={Settings} name="Settings" />
        </Drawer.Navigator>
    )
}

export default AuthStack;