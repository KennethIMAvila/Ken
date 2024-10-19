import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'left',marginBottom: 15 }}>Create an account</Text>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 15, marginBottom: 10, fontWeight: 'bold'}}>Name</Text>
        <TextInput style={{padding : 10, height: 40, borderColor: '#e5e5e5', borderWidth: 1, borderRadius: 10, marginBottom: 20}}/>
        <Text style={{fontSize: 15, marginBottom: 10, fontWeight: 'bold'}}>Email Address</Text>
        <TextInput style={{padding : 10, height: 40, borderColor: '#e5e5e5', borderWidth: 1, borderRadius: 10, marginBottom: 20}}/>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Password</Text>
        <TextInput style={{height: 40, borderColor: '#e5e5e5', borderWidth: 1, borderRadius: 10}} secureTextEntry={true}/>
        <Text style={{color: '#000000', fontSize: 11, marginTop: 20}}>By continuing you agree to our <Text style={{color: '#1E73BE', fontWeight: 'bold', fontSize: 11}}>terms of service.</Text></Text>
        <TouchableOpacity style={{backgroundColor: '#1E73BE', padding: 13, borderRadius: 50, marginTop: 20, alignItems: 'center'}} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </View> 
        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 30}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#e5e5e5'}}/>
          <Text style={{width: 150, textAlign: 'center', fontSize: 15, color: '#666'}}>Or sign in with</Text>
          <View style={{flex: 1, height: 1, backgroundColor: '#e5e5e5'}}/>
        </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        <TouchableOpacity style={{backgroundColor: '#E8E8E8', padding: 13, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <Image source={require('../assets/googlelogo.png')} style={{width: 20, height: 20, marginRight: 10}}/>     
            <Text style={{color: '#1E73BE', fontWeight: 'bold'}}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{marginTop: 40, color: '#000000', fontSize: 15, textAlign: 'center'}}>Already have an account? <Text style={{color: '#1E73BE', fontWeight: 'bold'}}>Sign in here</Text></Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    justifyContent: "center",
  },
});
