import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text,StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';

const Register = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={{paddingHorizontal: 25}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../assets/images/photo.jpg')} height={300} width={300} />
                </View>
                <Text style={styles.title}>Register</Text>
                
                <InputField label={'Full Name'} />
                <InputField label={'Email Address'} keyboardType="email-address" />
                <InputField label={'Password'} inputType={'password'} />
                <InputField label={'Confirm Password'} inputType={'password'} />
                                
                <CustomButton label={'Register'} onPress={()=>{}} />
                <Text style={{textAlign: 'center', color:'#666', marginBottom: 30}}>Or, login with</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:30}}>
                <TouchableOpacity 
                    onPress={() => {}} 
                    style={{
                        borderColor:'#ddd',
                        borderWidth:2,
                        borderRadius:10,
                        paddingHorizontal:30,
                        paddingVertical:10,
                }}>
                    <Image source={require('../../assets/images/i2G.png')} style={{height:50,width:50}} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {}} 
                    style={{
                        borderColor:'#ddd',
                        borderWidth:2,
                        borderRadius:10,
                        paddingHorizontal:30,
                        paddingVertical:10,
                }}>
                    <Image source={require('../../assets/images/i2G.png')} style={{height:50,width:50}} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {}} 
                    style={{
                        borderColor:'#ddd',
                        borderWidth:2,
                        borderRadius:10,
                        paddingHorizontal:30,
                        paddingVertical:10,
                }}>
                    <Image source={require('../../assets/images/i2G.png')} style={{height:50,width:50}} />
                </TouchableOpacity>
                </View>
                <View  style={{flexDirection:'row',justifyContent: 'center',}}>
                <Text>Already a Chef</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color:'#AD40AF', fontWeight:'700'}}> Login</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        marginBottom: 30
    }

})

export default Register;