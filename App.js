import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 100, height: 100, resizeMode: 'contain'}}
        source={require('./assets/ESP.jpg')}
      />
      <Text style={{...styles.header, fontSize: 20, fontWeight: 'bold', fontFamily: 'Inter-Bold'}}>Welcome to ESP app</Text>
      <Text style={{marginBottom: 1}}></Text>
      <Text style={{fontFamily: 'Gowun Dodum', textAlign: 'center', marginBottom: 3}}>Learn values that guide good decisions,</Text>
      <Text style={{fontFamily: 'Gowun Dodum', textAlign: 'center', marginBottom: 3}}>build respect, and help you grow in all</Text>
      <Text style={{fontFamily: 'Gowun Dodum', textAlign: 'center', marginBottom: 3}}>parts of life. Edukasyon sa Pagpapakatao</Text>
      <Text style={{fontFamily: 'Gowun Dodum', textAlign: 'center', marginBottom: 3}}>teaches us how to live with honesty,</Text>
      <Text style={{fontFamily: 'Gowun Dodum', textAlign: 'center', marginBottom: 3}}>kindness, and integrity.</Text>
      <View style={{width: 280, height: 50, backgroundColor: '#1E73BE', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#fff', fontFamily: 'Inter-Bold', fontSize: 16, fontWeight:'bold'}}>Login</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
