import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function IndexScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/ESP.jpg')}/>
      <Text style={{marginTop: 1}}></Text>
      <Text style={styles.header}>Welcome to ESP app</Text>
      <Text style={{marginBottom: 1}}></Text>
      <Text style={styles.paragraph}>Learn values that guide good decisions,</Text>
      <Text style={styles.paragraph}>build respect, and help you grow in all</Text>
      <Text style={styles.paragraph}>parts of life. Edukasyon sa Pagpapakatao</Text>
      <Text style={styles.paragraph}>teaches us how to live with honesty,</Text>
      <Text style={styles.paragraph}>kindness, and integrity.</Text>
      <TouchableOpacity style={styles.loginbutton} onPress={() => {
          navigation.navigate('Login');
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }}>
        <Text style={styles.loginbuttontext}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Register');
          navigation.reset({
            index: 0,
            routes: [{name: 'Register'}],
          });
        }}>
        <Text style={styles.registertext}>Create an account</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300, 
    height: 300, 
    resizeMode: 'contain'
  },
  header: {
    fontSize: 18, 
    fontWeight: 'bold'
  },
  paragraph: {
    textAlign: 'center', 
    marginBottom: 3, 
    fontSize: 15
  },
  loginbutton: {
    width: 280, 
    height: 50, 
    backgroundColor: '#1E73BE', 
    borderRadius: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 50
  },
  loginbuttontext: {
    color: '#fff', 
    fontSize: 16, 
    fontWeight:'bold'
  },
  registertext: {
    marginTop: 40, 
    color: '#1E73BE', 
    fontSize: 16, 
    fontWeight: 'bold'
  }
});