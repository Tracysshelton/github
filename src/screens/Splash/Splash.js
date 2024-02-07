import { StatusBar } from 'expo-status-bar';
import { 
  SafeAreaView,
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View
} from 'react-native';

const Splash = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{marginTop:20}}>
          <Text style={styles.title}>On The Menu</Text>
        </View>
        <TouchableOpacity 
          style={styles.spashbtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.splahbtntext}>Let's Cook</Text>
          {/* <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" /> */}
        </TouchableOpacity>
      </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30, 
      fontWeight: 'bold',
      color: '#20315f'
    },
    spashbtn: {
      backgroundColor: '#ad40af',
      padding: 20,
      width: '90%',
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20
    },
    splahbtntext: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#fff'
    }
  });

  
  export default Splash;