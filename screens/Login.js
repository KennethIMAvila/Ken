import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.subheader}>Sign in to enjoy our app</Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.eatext}>Email Address</Text>
        <TextInput style={styles.input} onChangeText={(email) => loginemail = email}/>
        <View style={styles.pfpflex}>
          <Text style={styles.ptext}>Password</Text>
          <TouchableOpacity onPress={() => alert('Work in progress, Frontend Only!')}>
            <Text style={{color: '#1E73BE'}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} secureTextEntry={this.secureTextEntry} onChangeText={(password) => loginpassword = password}/>
        <TouchableOpacity style={styles.loginbutton} onPress={() => {
          if (loginemail !== '' && loginpassword !== '') {
            navigation.navigate('Dashboard');
            alert('Login successful');
            navigation.reset({
              index: 0,
              routes: [{name: 'Dashboard'}],
            });
          } else {
            alert('Please fill in the required fields');
          }
        }}>
          <Text style={styles.loginbuttontext}>Login</Text>
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
      <TouchableOpacity style={{marginTop: 40}} onPress={() => {
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
    padding: 30,
    justifyContent: "center",
  },
  header: {
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign: 'left',
    marginBottom: 10
  }, 
  subheader: {
    fontSize: 14
  }, 
  eatext: {
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
    marginBottom: 20
  },
  pfpflex: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10
  }, 
  ptext: {
    fontSize: 15, 
    fontWeight: 'bold'
  },
  loginbutton: {
    backgroundColor: '#1E73BE', 
    padding: 13, 
    borderRadius: 50, 
    marginTop: 30, 
    alignItems: 'center'
  }, 
  loginbuttontext: {
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
  registertext: {
    color: '#1E73BE', 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center'
  }
});

