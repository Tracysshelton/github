import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView 
                {...props} 
                contentContainerStyle={{backgroundColor:'#8200d0'}}>
                    <ImageBackground source={require('../assets/images/i2G.png')} style={{padding: 20}}>
                        <Image source={require('../assets/images/i2G.png')} style={{height: 80, width: 80, borderRadius:40, marginBottom: 10,}} />
                        <Text style={{color:'#000', fontSize:18, fontWeight:'bold'}}>Yes Chef</Text>
                    </ImageBackground>
                    <View style={{flex:1, backgroundColor:'#fff',paddingTop:10}}>
                <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                <Text style={{fontSize:15,marginLeft:5}}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer;