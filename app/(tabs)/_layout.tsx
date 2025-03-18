import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { Tabs } from 'expo-router';

export default function Home() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#FF6A00',
        tabBarInactiveTintColor : 'grey',
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 6
        },
        tabBarStyle: {
          borderTopWidth : 0,
          elevation: 0,
          height: 68,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor : '#FDF8F5',
          paddingVertical : 12,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeNavIconContainer : styles.navIconContainer}>
              <FontAwesome name="home" size={size}  style={{margin: 1}} color={focused ? '#FF6A00' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="rental"
        options={{
          tabBarLabel: 'Locations',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeNavIconContainer : styles.navIconContainer}>
              <FontAwesome name="file" size={size}  style={{margin: 1}} color={focused ? '#FF6A00' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='account'
        options={{
          tabBarLabel: 'Compte',
          tabBarIcon: ({focused, color, size }) => (
            <View style={focused ? styles.activeNavIconContainer : styles.navIconContainer}>
              <FontAwesome name="user" size={size} style={{padding: 1}} color={focused ? '#FF6A00' : color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeNavIconContainer : {
    backgroundColor : 'rgba(255, 106, 0, 0.10)',
    width : 64,
    borderRadius : 16,
    alignItems : 'center',
  },
  navIconContainer : {
    borderRadius : 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
