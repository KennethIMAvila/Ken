import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function IndexScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 300, height: 300, resizeMode: 'contain'}}
        source={require('../assets/ESP.jpg')}
      />
      <Text style={{marginTop: 1}}></Text>
      <Text style={{...styles.header, fontSize: 18, fontWeight: 'bold'}}>Welcome to ESP app</Text>
      <Text style={{marginBottom: 1}}></Text>
      <Text style={{textAlign: 'center', marginBottom: 3, fontSize: 15}}>Learn values that guide good decisions,</Text>
      <Text style={{textAlign: 'center', marginBottom: 3, fontSize: 15}}>build respect, and help you grow in all</Text>
      <Text style={{textAlign: 'center', marginBottom: 3, fontSize: 15}}>parts of life. Edukasyon sa Pagpapakatao</Text>
      <Text style={{textAlign: 'center', marginBottom: 3, fontSize: 15}}>teaches us how to live with honesty,</Text>
      <Text style={{textAlign: 'center', marginBottom: 50, fontSize: 15}}>kindness, and integrity.</Text>
      <TouchableOpacity
        style={{width: 280, height: 50, backgroundColor: '#1E73BE', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}>
        <Text style={{marginTop: 40, color: '#1E73BE', fontSize: 16, fontWeight: 'bold'}}>Create an account</Text>
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
});