import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAuth } from "../Contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import Favoritos from "../screens/Favoritos";
import Pesquisa from "../screens/Pequisa";
import Logout from "../screens/Logout";
import Login from "../screens/Login";
import Subscription from "../screens/Subscription";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? (

        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarShowLabel: false
        }}>
          <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({ color, size }) => {
              return (<Feather name='home' color={color} size={size} />)
            }
          }} />

          <Tab.Screen name='Favoritos' component={Favoritos} options={{
            tabBarIcon: ({ color, size }) => {
              return (<Feather name='star' color={color} size={size} />)
            }
          }} />

          <Tab.Screen name='Pesquisa' component={Pesquisa} options={{
            tabBarIcon: ({ color, size }) => {
              return (<Feather name='search' color={color} size={size} />)
            }
          }} />

          <Tab.Screen
            name="Logout"
            component={Logout}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="log-out" color={color} size={size} />
              )
            }}
          />

        </Tab.Navigator>

      ) : (
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarShowLabel: false
        }}>
          <Tab.Screen name='Login' component={Login} options={{
            tabBarIcon: ({ color, size }) => {
              return (<Feather name='user' color={color} size={size} />)
            }
          }} />

          <Tab.Screen name='Subscription' component={Subscription} options={{
            tabBarIcon: ({ color, size }) => {
              return (<Feather name='log-in' color={color} size={size} />)
            }
          }} />
        </Tab.Navigator>
      )}

    </NavigationContainer>
  );
}
