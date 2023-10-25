import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Setting } from "./src/screens";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import the icons library you are using
import { SafeAreaView, View, StatusBar } from "react-native"; // Import SafeAreaView and StatusBar

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    // backgroundColor: "red",
  },
};

function MyTabs() {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
      {/* Set the StatusBar to be translucent */}
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: "Setting",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-sharp" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
