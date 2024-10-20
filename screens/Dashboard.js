import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={[styles.container, {backgroundColor: '#5C55D1'}]}> 
    <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: '#fff', paddingLeft: 20, marginTop: 50, position: 'absolute', top: '5%'}}>Welcome to ESP App!</Text>
    <View style={{flexDirection: 'row', position: 'absolute', top: '15%', width: '100%', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20}}>
      <Text style={{fontSize: 14, color: '#fff'}}>Today's journey to being better</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Aboutus')}>
        <Text style={{fontSize: 16, color: '#fff'}}>About us</Text>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#fff', width: '100%', marginTop: 5}}></View>
      </TouchableOpacity>
    </View>
    <View style={{backgroundColor: '#fff', height: '80%', borderRadius: 20, width: '100%', padding: 20, position: 'absolute', bottom: 0}}>
      <View style={{borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, padding: 15, marginBottom: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#655CF0'}}>Today's Topic</Text>
        <Text style={{fontSize: 14 , color: 'black'}}>Being Honest in Daily Life</Text>
        <View style={{backgroundColor: '#655CF0', marginTop: 15, alignItems: 'flex-end', width: 100, borderRadius: 50}}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#fff', padding: 5}}>Start</Text>
            <Image source={require('../assets/arrow.png')} style={{width: 20, height: 20, tintColor: 'white', marginEnd: 10}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, padding: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/ESP.jpg')} style={{width: 75, height: 75, marginRight: 20, marginLeft: 10}}/>
        <View>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#655CF0'}}>Values We Live By</Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {'\u2022'} Being honest and true
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {'\u2022'} Showing respect to others
          </Text>
        </View>
      </View>
      <View style={{borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, padding: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/ESP.jpg')} style={{width: 75, height: 75, marginRight: 20, marginLeft: 10}}/>
        <View>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#655CF0'}}>Making Good Choices</Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {'\u2022'} Right from wrong
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {'\u2022'} Solving daily problems
          </Text>
        </View>
      </View>
      <View style={{borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, padding: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/ESP.jpg')} style={{width: 75, height: 75, marginRight: 20, marginLeft: 10}}/>
        <View>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#655CF0'}}>Beign Good Friend</Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {'\u2022'} Helping others
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {'\u2022'} Working together
          </Text>
        </View>
      </View>
      <View style={{borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, padding: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/ESP.jpg')} style={{width: 75, height: 75, marginRight: 20, marginLeft: 10}}/>
        <View>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#655CF0'}}>My Progress</Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {'\u2022'} Lessons completed: 5
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {'\u2022'} Today's goal: 2 activities
          </Text></View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  }
});
