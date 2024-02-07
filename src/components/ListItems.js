import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ListContainer = ({image, title, subtitle}) => {
    
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20
        }}>
            <View style={styles.listContiner}>
                <Image
                    source={image} 
                    style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}  
                />
                <View>
                    <Text>{title}</Text>
                    <Text>{subtitle}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Text>View</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    listContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1
    }
})

export default ListContainer;