import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from "./screens/Index";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import DashboardScreen from "./screens/Dashboard";
import AboutusScreen from "./screens/Aboutus";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Aboutus" component={AboutusScreen} />
      </Stack.Navigator>      
    </NavigationContainer>
  );
}
