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
              <TouchableOpacity style={styles.home} onPress={() => {
                navigation.navigate('Dashboard');
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Dashboard'}],
                });
              }}>
                <Image
                  source={focused ? require('../assets/home2.png') : require('../assets/home2.png')}
                  style={styles.homeicon}
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
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>About Us</Text>
    <Text style={styles.paragraphs}>
      Our app is designed to help users understand and practice the values taught in Edukasyon sa Pagpapakatao (EsP). We believe that personal growth, responsibility, and making good choices are important for living a meaningful life. This app serves as a guide to help users apply these values in simple and practical ways.
      Through the app, users can track their progress, learn about making responsible decisions, and understand how to become better individuals and friends. Our goal is to create a space where users can reflect, build good habits, and apply what they’ve learned in real life.
    </Text>
    <Text style={styles.subtitles}>How We Designed the App</Text>
    <Text style={styles.paragraphs}>
      We made sure the colors and design support EsP's goals. The main color we used is white, which gives the app a clean and clear look, making it easy to read and navigate. Blue is used as a secondary color to highlight important buttons and sections, helping guide users through the app.
    </Text>
    <Text style={styles.subtitles}>Our Team</Text>
    <Text style={styles.paragraphs}>
      Our team worked together to design this app with user-friendly features and a simple layout. Each member contributed to making sure it’s easy to use and full of helpful tools for self-reflection and improvement.
      {'\n'}
      {'\n'}
      We hope this app helps users on their journey of personal growth and living by the values of Edukasyon sa Pagpapakatao.
    </Text>
    <View style={styles.container2}>
      <View style={styles.team}>
        <Text style={styles.teamtitle}>
          DEVELOPMENT TEAM (GROUP 8)
        </Text>
          <Text style={styles.teamsubtitle}>
            The talented people behind the scenes
          </Text> 
          <View style={styles.imagescontainer}>
            <Image
              style={styles.teamimages}
              source={require('../assets/Avila.jpg')}
            />
          </View>
          <View style={styles.detailscontainer}>
            <Image
              style={styles.background}
              source={require('../assets/bg1.jpg')}
            />
            <Text style={styles.names}>
              Kenneth Ivan M. Avila
            </Text>
            <Text style={styles.roles}>
              Group Leader - Backend Dev       
            </Text>
            <View style={styles.line}/>
            <View style={styles.socialsflex}>
              <Image
                style={styles.icons}
                source={require('../assets/email.png')}
              />
              <Image
                style={styles.icons}
                source={require('../assets/github.png')}
              />
              <Image
                style={styles.icons}
                source={require('../assets/twitter.png')}
              />
            </View>
          </View>
          <View style={styles.imagescontainer}>
            <Image
              style={styles.teamimages}
              source={require('../assets/Jerico.jpg')}
            />
          </View>
          <View style={styles.detailscontainer}>
            <Image
              style={styles.background}
              source={require('../assets/bg2.jpg')}
            />
            <Text style={styles.names}>
              Jerico S. Evangelista
            </Text>
            <Text style={styles.roles}>
              Color Theory - UI/UX Designer      
            </Text>
            <View style={styles.line}/>
            <View style={styles.socialsflex}>
              <Image
                style={styles.icons}
                source={require('../assets/email.png')}
              />
              <Image
                style={styles.icons}
                source={require('../assets/github.png')}
              />
              <Image
                style={styles.icons}
                source={require('../assets/twitter.png')}
              />
            </View>
          </View>
          <View style={styles.imagescontainer}>
            <Image
              style={styles.teamimages}
              source={require('../assets/Colinares.jpg')}
            />
          </View>
          <View style={styles.detailscontainer}>
            <Image
              style={styles.background}
              source={require('../assets/blackbg.jpg')}
            />
            <Text style={styles.names}>
              Eduardo Colinares
              </Text>
            <Text style={styles.roles}>
              Spacing       
            </Text>
            <View style={styles.line}/>
            <View style={styles.socialsflex}>
              <Image
                style={styles.icons}
                source={require('../assets/email.png')}
              />
            </View>
          </View>
          <View style={styles.imagescontainer}>
            <Image
              style={styles.teamimages}
              source={require('../assets/Tanauan.jpg')}
            />
          </View>
          <View style={styles.detailscontainer}>
            <Image
              style={styles.background}
              source={require('../assets/blackbg.jpg')}
            />
            <Text style={styles.names}>
              Emanuel Tanauan
            </Text>
            <Text style={styles.roles}>
              Typography       
            </Text>
            <View style={styles.line}/>
            <View style={styles.socialsflex}>
              <Image
                style={styles.icons}
                source={require('../assets/email.png')}
              />
            </View>
          </View>
          <View style={styles.imagescontainer}>
            <Image
              style={styles.teamimages}
              source={require('../assets/Nonato.jpg')}
            />
          </View>
          <View style={styles.detailscontainer}>
            <Image
              style={styles.background}
              source={require('../assets/blackbg.jpg')}
            />
            <Text style={styles.names}>
              Ranz Joshua Nonato 
            </Text>
            <Text style={styles.roles}>
              60-30-10 rule        
            </Text>
            <View style={styles.line}/>
            <View style={styles.socialsflex}>
              <Image
                style={styles.icons}
                source={require('../assets/email.png')}
              />
            </View>
          </View>
          <View style={styles.imagescontainer}>
            <Image
              style={styles.teamimages}
              source={require('../assets/Cristobal.jpg')}
            />
          </View>
          <View style={styles.detailscontainer}>
            <Image
              style={styles.background}
              source={require('../assets/blackbg.jpg')}
            />
            <Text style={styles.names}>
              Jhon Mark Gatao Cristobal 
            </Text>
            <Text style={styles.roles}>
              User Persona       
            </Text>
            <View style={styles.line}/>
            <View style={styles.socialsflex}>
              <Image
                style={styles.icons}
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
    flexGrow: 1, 
    justifyContent: 'center', 
    backgroundColor: '#313131'
  },
  container2: {
    backgroundColor: '#313131', 
    marginTop: 20
  },
  AboutUs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  home: {
    width: 60, 
    height: 60, 
    backgroundColor: '#655CF0', 
    opacity: 1, 
    borderRadius: 30, 
    marginBottom: 40, 
    padding: 13 
  },
  homeicon: {
    width: 30, 
    height: 30, 
    zIndex: 100, 
    alignSelf: 'center'
  },
  title: {
    fontSize: 25, 
    color: 'white', 
    fontWeight: 'bold', 
    marginVertical: 20, 
    marginHorizontal: 30,
  },
  subtitles: {
    fontSize: 18, 
    color: 'white', 
    fontWeight: 'bold', 
    marginBottom: 20, 
    marginTop: 20, 
    marginLeft: 30, 
    marginRight: 30
  },
  paragraphs: {
    fontSize: 12, 
    color: 'white', 
    lineHeight: 15, 
    marginLeft: 30, 
    marginRight: 30
  },
  team: {
    backgroundColor: '#B4ACAC', 
    opacity: 0.75, 
    marginTop: 20, 
    marginLeft: 20, 
    marginRight: 20, 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
    paddingBottom: 40
  },
  teamtitle: {
    fontSize: 10, 
    color: 'white', 
    textAlign: 'center', 
    fontWeight: 'bold', 
    marginTop: 40, 
    marginBottom: 10
  },
  teamsubtitle: {
    fontSize: 26, 
    color: 'black', 
    textAlign: 'center', 
    fontWeight: 'bold'
  },
  imagescontainer: {
    width: 150, 
    alignSelf: 'center', 
    height: 150, 
    backgroundColor: 'black', 
    marginTop: 20, 
    borderRadius: 75, 
    zIndex: 100, 
    marginBottom: -80
  },
  teamimages: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    alignSelf: 'center', 
    borderWidth: 2, 
    borderColor: 'white', 
    backgroundColor: '#000000'
  },
  detailscontainer: {
    width: '85%', 
    alignSelf: 'center', 
    height: 220, 
    backgroundColor: 'transparent', 
    marginTop: 20
  },
  background: {
    width: '100%', 
    height: '100%', 
    borderRadius: 20, 
    position: 'absolute', 
    top: 0, 
    left: 0
  },
  names: {
    fontSize: 18, 
    color: 'white', 
    textAlign: 'center', 
    fontWeight: 'bold', 
    marginTop: 70
  },
  roles: {
    fontSize: 16, 
    color: 'white', 
    textAlign: 'center', 
    marginTop: 5
  },
  line: {
    width: '90%', 
    height: 2, 
    backgroundColor: 'white', 
    marginTop: 30, 
    marginBottom: 10, 
    alignSelf: 'center'
  },
  socialsflex: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  icons: {
    width: 30, 
    height: 30, 
    marginRight: 10, 
    borderRadius: 15
  }
});