import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#2A7C68"
          }
        }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Recipes" component={RecipesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
      
      
    
  );
}

const styles = StyleSheet.create({
  
});
