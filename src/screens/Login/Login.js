import React from 'react';
import { SafeAreaView,  View, Text,StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingHorizontal: 25}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../assets/images/photo.jpg')} height={300} width={300} />
                </View>
                <Text style={styles.title}>Login</Text>
                
                <InputField label={'Email Address'} keyboardType="email-address" />
                <InputField label={'Password'} inputType={'password'} fieldButtonLabel={'Forgot'} fieldButtonFunction={() => {}} />
            
                <CustomButton label={'Login'} onPress={()=>{}} />
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
                <Text>Next Chef</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{color:'#AD40AF', fontWeight:'700'}}> Register here</Text>
                </TouchableOpacity>
                </View>
            </View>
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

export default Login;