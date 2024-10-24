import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AboutusScreen ({ navigation }) {
  return (
    <Tab.Navigator
        initialRouteName="AboutUs"
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#313131',
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            tabBarLabel: 'About Us',
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity onPress={() => {
                navigation.navigate('Dashboard');
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Dashboard'}],
                });
              }} style={{ width: 60, height: 60, backgroundColor: '#655CF0', opacity: 1, borderRadius: 30, marginBottom: 40, padding: 13 }}>
                <Image
                  source={focused ? require('../assets/home2.png') : require('../assets/home2.png')}
                  style={{ width: 30, height: 30, zIndex: 100, alignSelf: 'center'}}
                />
              </TouchableOpacity>
            ),
          }}
        />
    </Tab.Navigator>
  );
}

const AboutUs  = ({ navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });
  return (
  <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', backgroundColor: '#313131',  }}>
    <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', marginBottom: 20, marginLeft: 30, marginRight: 30, marginTop: 60}}>About Us</Text>
    <Text style={{fontSize: 12, color: 'white', lineHeight: 15, marginLeft: 30, marginRight: 30}}>
      Our app is designed to help users understand and practice the values taught in Edukasyon sa Pagpapakatao (EsP). We believe that personal growth, responsibility, and making good choices are important for living a meaningful life. This app serves as a guide to help users apply these values in simple and practical ways.
      Through the app, users can track their progress, learn about making responsible decisions, and understand how to become better individuals and friends. Our goal is to create a space where users can reflect, build good habits, and apply what they’ve learned in real life.
    </Text>
    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 30, marginRight: 30}}>How We Designed the App</Text>
    <Text style={{fontSize: 12, color: 'white', lineHeight: 15, marginLeft: 30, marginRight: 30}}>
      We made sure the colors and design support EsP's goals. The main color we used is white, which gives the app a clean and clear look, making it easy to read and navigate. Blue is used as a secondary color to highlight important buttons and sections, helping guide users through the app.
    </Text>
    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 30, marginRight: 30}}>Our Team</Text>
    <Text style={{fontSize: 12, color: 'white', lineHeight: 15, marginLeft: 30, marginRight: 30}}>
      Our team worked together to design this app with user-friendly features and a simple layout. Each member contributed to making sure it’s easy to use and full of helpful tools for self-reflection and improvement.
      {'\n'}
      {'\n'}
      We hope this app helps users on their journey of personal growth and living by the values of Edukasyon sa Pagpapakatao.
    </Text>
    <View style={{backgroundColor: '#313131', marginTop: 20}}>
      <View style={{backgroundColor: '#B4ACAC', opacity: 0.75, marginTop: 20, marginLeft: 20, marginRight: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingBottom: 40}}>
        <Text style={{fontSize: 10, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 40, marginBottom: 10}}>
          DEVELOPMENT TEAM (GROUP 8)
        </Text>
          <Text style={{fontSize: 26, color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
            The talented people behind the scenes
          </Text> 
          <View style={{width: 150, alignSelf: 'center', height: 150, backgroundColor: 'black', marginTop: 20, borderRadius: 75, zIndex: 100, marginBottom: -80}}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75, alignSelf: 'center', borderWidth: 2, borderColor: 'white', backgroundColor: '#000000'}}
              source={require('../assets/Avila.jpg')}
            />
          </View>
          <View style={{width: '85%', alignSelf: 'center', height: 220, backgroundColor: 'transparent', marginTop: 20}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 20, position: 'absolute', top: 0, left: 0}}
              source={require('../assets/bg1.jpg')}
            />
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 70}}>
              Kenneth Ivan M. Avila
            </Text>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginTop: 5}}>
              Group Leader - Backend Dev       
            </Text>
            <View style={{width: '90%', height: 2, backgroundColor: 'white', marginTop: 30, marginBottom: 10, alignSelf: 'center'}}/>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30, marginRight: 10, borderRadius: 15}}
                source={require('../assets/email.png')}
              />
              <Image
                style={{width: 30, height: 30, marginRight: 10, borderRadius: 15}}
                source={require('../assets/github.png')}
              />
              <Image
                style={{width: 30, height: 30, borderRadius: 15}}
                source={require('../assets/twitter.png')}
              />
            </View>
          </View>
          <View style={{width: 150, alignSelf: 'center', height: 150, backgroundColor: 'black', marginTop: 20, borderRadius: 75, zIndex: 100, marginBottom: -80}}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75, alignSelf: 'center', borderWidth: 2, borderColor: 'white', backgroundColor: 'black'}}
              source={require('../assets/Jerico.jpg')}
            />
          </View>
          <View style={{width: '85%', alignSelf: 'center', height: 220, backgroundColor: 'transparent', marginTop: 20}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 20, position: 'absolute', top: 0, left: 0}}
              source={require('../assets/bg2.jpg')}
            />
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 70}}>
              Jerico S. Evangelista
            </Text>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginTop: 5}}>
              Color Theory - UI/UX Designer      
            </Text>
            <View style={{width: '90%', height: 2, backgroundColor: 'white', marginTop: 30, marginBottom: 10, alignSelf: 'center'}}/>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30, marginRight: 10, borderRadius: 15}}
                source={require('../assets/email.png')}
              />
              <Image
                style={{width: 30, height: 30, marginRight: 10, borderRadius: 15}}
                source={require('../assets/github.png')}
              />
              <Image
                style={{width: 30, height: 30, borderRadius: 15}}
                source={require('../assets/twitter.png')}
              />
            </View>
          </View>
          <View style={{width: 150, alignSelf: 'center', height: 150, backgroundColor: 'black', marginTop: 20, borderRadius: 75, zIndex: 100, marginBottom: -80}}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75, alignSelf: 'center', borderWidth: 2, borderColor: 'white', backgroundColor: 'black'}}
              source={require('../assets/Colinares.jpg')}
            />
          </View>
          <View style={{width: '85%', alignSelf: 'center', height: 220, backgroundColor: 'transparent', marginTop: 20}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 20, position: 'absolute', top: 0, left: 0}}
              source={require('../assets/blackbg.jpg')}
            />
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 70}}>
              Eduardo Colinares
              </Text>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginTop: 5}}>
              Spacing       
            </Text>
            <View style={{width: '90%', height: 2, backgroundColor: 'white', marginTop: 30, marginBottom: 10, alignSelf: 'center'}}/>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30, marginRight: 10, borderRadius: 15}}
                source={require('../assets/email.png')}
              />
            </View>
          </View>
          <View style={{width: 150, alignSelf: 'center', height: 150, backgroundColor: 'black', marginTop: 20, borderRadius: 75, zIndex: 100, marginBottom: -80}}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75, alignSelf: 'center', borderWidth: 2, borderColor: 'white', backgroundColor: 'black'}}
              source={require('../assets/Tanauan.jpg')}
            />
          </View>
          <View style={{width: '85%', alignSelf: 'center', height: 220, backgroundColor: 'transparent', marginTop: 20}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 20, position: 'absolute', top: 0, left: 0}}
              source={require('../assets/blackbg.jpg')}
            />
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 70}}>
              Emanuel Tanauan
            </Text>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginTop: 5}}>
              Typography       
            </Text>
            <View style={{width: '90%', height: 2, backgroundColor: 'white', marginTop: 30, marginBottom: 10, alignSelf: 'center'}}/>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30, marginRight: 10, borderRadius: 15}}
                source={require('../assets/email.png')}
              />
            </View>
          </View>
          <View style={{width: 150, alignSelf: 'center', height: 150, backgroundColor: 'black', marginTop: 20, borderRadius: 75, zIndex: 100, marginBottom: -80}}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75, alignSelf: 'center', borderWidth: 2, borderColor: 'white', backgroundColor: 'black'}}
              source={require('../assets/Nonato.jpg')}
            />
          </View>
          <View style={{width: '85%', alignSelf: 'center', height: 220, backgroundColor: 'transparent', marginTop: 20}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 20, position: 'absolute', top: 0, left: 0}}
              source={require('../assets/blackbg.jpg')}
            />
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 70}}>
              Ranz Joshua Nonato 
            </Text>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginTop: 5}}>
              60-30-10 rule        
            </Text>
            <View style={{width: '90%', height: 2, backgroundColor: 'white', marginTop: 30, marginBottom: 10, alignSelf: 'center'}}/>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30, marginRight: 10, borderRadius: 15}}
                source={require('../assets/email.png')}
              />
            </View>
          </View>
          <View style={{width: 150, alignSelf: 'center', height: 150, backgroundColor: 'black', marginTop: 20, borderRadius: 75, zIndex: 100, marginBottom: -80}}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75, alignSelf: 'center', borderWidth: 2, borderColor: 'white', backgroundColor: 'black'}}
              source={require('../assets/Cristobal.jpg')}
            />
          </View>
          <View style={{width: '85%', alignSelf: 'center', height: 220, backgroundColor: 'transparent', marginTop: 20}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 20, position: 'absolute', top: 0, left: 0}}
              source={require('../assets/blackbg.jpg')}
            />
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center', fontWeight: 'bold', marginTop: 70}}>
              Jhon Mark Gatao Cristobal 
            </Text>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center', marginTop: 5}}>
              User Persona       
            </Text>
            <View style={{width: '90%', height: 2, backgroundColor: 'white', marginTop: 30, marginBottom: 10, alignSelf: 'center'}}/>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30, marginRight: 10, borderRadius: 15}}
                source={require('../assets/email.png')}
              />
              </View>
            </View>
          </View>
        </View>
    </ScrollView>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  AboutUs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});