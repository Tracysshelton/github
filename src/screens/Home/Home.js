import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../../components/BannerSlider';
import CustomSwitch from '../../components/CustomSwitch';
import ListItems from '../../components/ListItems';
import { windowWidth } from '../../utils/Dimensions';
import { sliderData, latestChef, yourchef } from '../../model/data';

const Home = ({navigation}) => {
    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item} />
    }
    const [latestTab, setLatestTab] = useState(1);
    const onSelectSwitch =(value) => {
        setLatestTab(value)
    }
    return (
        <SafeAreaView style={styles.inforcontainer}>
            <ScrollView style={{padding:20}}>
                <View style={styles.infoline}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Yes Chef</Text>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <ImageBackground source={require('../../assets/images/photo.jpg')} style={styles.headerinmage} imageStyle={{borderRadius: 25}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchwrapper}>
                    <TextInput 
                        placeholder="search" 
                        style={styles.searchinput} 
                        size={20} 
                        color="#c6c6c6" 
                    />
                </View>
                    
                <View style={{
                    marginVertical: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Top Chef</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{color: '#0aada'}}>See all</Text>
                    </TouchableOpacity>   
                </View>
                <Carousel 
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                />
                <View style={{marginVertical: 20}}>
                    <CustomSwitch selectionMode={1} option1="latest" option2="yours" onSelectSwitch={onSelectSwitch} />
                </View>
                {latestTab == 1 && 
                    latestChef.map(item => (
                        <ListItems Key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} />
                    ))
                }
                {latestTab == 2 && 
                    yourchef.map( item =>(
                        <ListItems Key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerinmage: {
        width: 35,
        height: 35
    },
    inforcontainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    infoline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    searchwrapper:{
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    searchinput: {
        marginRight:5
    }
})

export default Home;