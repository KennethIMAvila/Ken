import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an account</Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.neatext}>Name</Text>
        <TextInput style={styles.input} onChangeText={(name) => this.name = name}/>
        <Text style={styles.neatext}>Email Address</Text>
        <TextInput style={styles.input} onChangeText={(email) => this.email = email}/>
        <Text style={styles.neatext}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={(password) => this.password = password}/>
        <View style={styles.tosflex}>
          <Text style={styles.tostext}>By continuing you agree to our</Text>
          <TouchableOpacity onPress={() => alert('Work in progress, Frontend Only!')}>
            <Text style={styles.tostextlink}> terms of service.</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signupbutton} onPress={() => {
          if (this.name !== '' && this.email !== '' && this.password !== '') {
            this.name = ''; 
            this.email = '';
            this.password = '';
            navigation.navigate('Login');
            alert('Registration successful');
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          } else {
            alert('Please fill in the required fields');
          }
        }}>
          <Text style={styles.signupbuttontext}>Sign Up</Text>
        </TouchableOpacity>
      </View> 
        <View style={styles.optionflex}>
          <View style={styles.line}/>
          <Text style={styles.midtext}>Or sign in with</Text>
          <View style={styles.line}/>
        </View>
      <View style={styles.googleflex}>
        <TouchableOpacity style={styles.googlebutton} onPress={() => alert('Work in progress, Frontend Only!')}>
            <Image source={require('../assets/googlelogo.png')} style={styles.googlelogo}/>     
            <Text style={styles.googlebuttontext}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logintext}>Already have an account? <Text style={styles.logintextlink}>Sign in here</Text></Text>
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
  header: {
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign: 'left',
    marginBottom: 15
  },
  neatext: {
    fontSize: 15, 
    marginBottom: 10, 
    fontWeight: 'bold'
  },
  input: {
    padding : 10, 
    height: 40, 
    borderColor: '#e5e5e5', 
    borderWidth: 1, 
    borderRadius: 10, 
    marginBottom: 10
  },
  tosflex: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20
  },
  tostext: {
    color: '#000000', 
    fontSize: 11
  },
  tostextlink: {
    color: '#1E73BE', 
    fontWeight: 'bold', 
    fontSize: 11
  },
  signupbutton: {
    backgroundColor: '#1E73BE', 
    padding: 13, 
    borderRadius: 50, 
    marginTop: 20, 
    alignItems: 'center'
  },
  signupbuttontext: {
    color: '#fff', 
    fontWeight: 'bold'
  },
  optionflex: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 30
  }, 
  line: {
    flex: 1, 
    height: 1, 
    backgroundColor: '#e5e5e5'
  },
  midtext: {
    width: 150, 
    textAlign: 'center', 
    fontSize: 15, 
    color: '#666'
  },
  googleflex: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20
  }, 
  googlebutton: {
    backgroundColor: '#E8E8E8', 
    padding: 13, 
    borderRadius: 50, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%'  
  },
  googlelogo: {
    width: 20, 
    height: 20, 
    marginRight: 10
  },
  googlebuttontext: {
    color: '#1E73BE', 
    fontWeight: 'bold'
  },
  logintext: {
    marginTop: 40, 
    color: '#000000', 
    fontSize: 15, 
    textAlign: 'center'
  },
  logintextlink: {
    color: '#1E73BE', 
    fontWeight: 'bold'
  }
});
