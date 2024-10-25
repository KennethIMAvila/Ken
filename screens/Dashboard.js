import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}> 
    <View style={styles.headerflex}>
      <Text style={styles.header}>Welcome to ESP App!</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Index');
        navigation.reset({
          index: 0,
          routes: [{name: 'Index'}],
        });
      }}>
      <Image source={require('../assets/logout.png')} style={styles.logout} />
      </TouchableOpacity>
    </View>
    <View style={styles.subheaderflex}>
      <Text style={styles.subheader}>Today's journey to being better</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Aboutus');
        navigation.reset({
          index: 0,
          routes: [{name: 'Aboutus'}],
        });
      }}>
        <Text style={styles.aboutus}>About us</Text>
        <View style={styles.aboutusuline}></View>
      </TouchableOpacity>
    </View>
    <View style={styles.container2}>
      <View style={styles.mainbox}>
        <Text style={styles.mainboxheader}>Today's Topic</Text>
        <Text style={styles.mainboxsubheader}>Being Honest in Daily Life</Text>
        <View style={styles.startflex}>
          <TouchableOpacity style={styles.startbutton} onPress={() => alert('Work in progress, Frontend Only!')}>
            <Text style={styles.startbuttontext}>Start</Text>
            <Image source={require('../assets/arrow.png')} style={styles.arrow}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subbox}>
        <Image source={require('../assets/d1.jpg')} style={styles.subboximage}/>
        <View>
          <Text style={styles.subboxheader}>Values We Live By</Text>
          <Text style={styles.subboxtext}>
            {'\u2022'} Being honest and true
          </Text>
          <Text style={styles.subboxtext}>
            {'\u2022'} Showing respect to others
          </Text>
        </View>
      </View>
      <View style={styles.subbox}>
        <Image source={require('../assets/d2.jpg')} style={styles.subboximage}/>
        <View>
          <Text style={styles.subboxheader}>Making Good Choices</Text>
          <Text style={styles.subboxtext}>
            {'\u2022'} Right from wrong
          </Text>
          <Text style={styles.subboxtext}>
            {'\u2022'} Solving daily problems
          </Text>
        </View>
      </View>
      <View style={styles.subbox}>
        <Image source={require('../assets/d3.jpg')} style={styles.subboximage}/>
        <View>
          <Text style={styles.subboxheader}>Being Good Friend</Text>
          <Text style={styles.subboxtext}>
            {'\u2022'} Helping others
          </Text>
          <Text style={styles.subboxtext}>
            {'\u2022'} Working together
          </Text>
        </View>
      </View>
      <View style={styles.subbox}>
        <Image source={require('../assets/d4.jpg')} style={styles.subboximage}/>
        <View>
          <Text style={styles.subboxheader}>My Progress</Text>
          <Text style={styles.subboxtext}>
            {'\u2022'} Lessons completed: 5
          </Text>
          <Text style={styles.subboxtext}>
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
    backgroundColor: '#5C55D1'
  },
  container2: {
    backgroundColor: '#fff', 
    height: '80%', 
    borderRadius: 20, 
    width: '100%', 
    padding: 20, 
    position: 'absolute', 
    bottom: 0
  },
  headerflex: {
    flexDirection: 'row', 
    alignItems: 'center', 
    position: 'absolute', 
    top: '5%', 
    paddingLeft: 20, 
    marginTop: 50
  },
  header: {
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#fff'
  },
  logout: {
    width: 30, 
    height: 30, 
    marginRight: 10, 
    tintColor: 'red', 
    marginLeft: 100
  },
  subheaderflex: {
    flexDirection: 'row', 
    position: 'absolute', 
    top: '15%', 
    width: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20
  },
  subheader: {
    fontSize: 14, 
    color: '#fff'
  },
  aboutus: {
    fontSize: 16, 
    color: '#fff'
  },
  aboutusuline: {
    borderBottomWidth: 1, 
    borderBottomColor: '#fff', 
    width: '100%', 
    marginTop: 5
  },
  mainbox: {
    borderWidth: 1, 
    borderColor: 'lightgray', 
    borderRadius: 10, 
    padding: 15, 
    marginBottom: 10
  },
  mainboxheader: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#655CF0'
  },
  mainboxsubheader: {
    fontSize: 14 , 
    color: 'black'
  },
  startflex: {
    backgroundColor: '#655CF0', 
    marginTop: 10, 
    alignItems: 'flex-end', 
    width: 100, 
    borderRadius: 50, 
    padding: 5
  },
  startbutton: {
    flexDirection: 'row', 
    alignItems: 'center',
    height: 20
  },
  startbuttontext: {
    fontSize: 12, 
    fontWeight: 'bold', 
    color: '#fff', 
  },
  arrow: {
    width: 20, 
    height: 20, 
    tintColor: 'white', 
    marginEnd: 10
  },
  subbox: {
    borderWidth: 1, 
    borderColor: 'lightgray', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  subboximage: {
    width: 75, 
    height: 75, 
    borderRadius: 37.5, 
    marginRight: 20, 
    marginLeft: 10
  },
  subboxheader: {
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#655CF0'
  },
  subboxtext: {
    fontSize: 12, 
    color: 'black'
  }
});
