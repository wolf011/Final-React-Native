import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Home from './src/screens/Home';
import { Feather } from '@expo/vector-icons';
import Favorites from './src/screens/Favorites';
import Login from './src/screens/Login';
import Subscription from './src/screens/Subscription';
import { StatusBar } from 'react-native';
import Pesquisa from './src/screens/Pequisa';
import SplashScreen from './src/screens/Splash';

const Tab = createBottomTabNavigator();

export default function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'}/>
      <Tab.Navigator  screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarShowLabel: false
        }}>

          <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({color, size}) => {
              return (<Feather name='home' color={color} size={size}/>)
            }
          }}/>

          <Tab.Screen name='Favorites' component={Favorites} options={{
            tabBarIcon: ({color, size}) => {
              return (<Feather name='star' color={color} size={size}/>)
            }
          }}/>

          <Tab.Screen name='Pesquisa' component={Pesquisa} options={{
            tabBarIcon: ({color, size}) => {
              return (<Feather name='search' color={color} size={size}/>)
            }
          }}/>

          <Tab.Screen name='Login' component={Login} options={{
            tabBarIcon: ({color, size}) => {
              return (<Feather name='user' color={color} size={size}/>)
            }
          }}/>

          <Tab.Screen name='Subscription' component={Subscription} options={{
            tabBarIcon: ({color, size}) => {
              return (<Feather name='log-in' color={color} size={size}/>)
            }
          }}/>

        </Tab.Navigator>
    </NavigationContainer>
  );
}
