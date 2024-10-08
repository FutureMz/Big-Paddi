import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from '../Screens/Intro';
import { Login } from '../Screens/Login';
import { Signup } from '../Screens/Signup';
import { HomeScreen } from '../Screens/HomeScreen';
import { Profile } from '../Screens/Profile';


const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}