import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Recipe from '../screens/Recipe';
import Favorites from '../screens/Favorites';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import RecipeDetails from '../screens/RecipeDetails/RecipeDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Home} name="Home" options={{headerShown: false}} />
            <Stack.Screen 
                component={RecipeDetails} 
                name="RecipeDetails"
                options={({route}) => ({
                    title: route.params?.title,
                })}
            />
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#AD40AF',
            },
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: '#000'

        }}>
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="Recipe" component={Recipe} options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="home-outline" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="Favorites" component={Favorites} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="heart-outline" color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;