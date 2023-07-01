import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import { Ionicons } from '@expo/vector-icons';

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
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor: '#FFBA4D',
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={20}/>
            )
          }} />
          <Tab.Screen name="Recipes" component={RecipesScreen} options={{
            tabBarLabel: 'Recipes',
            tabBarActiveTintColor: '#FFBA4D',
            tabBarIcon: () => (
              <Ionicons name="book-outline" size={20}/>
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
      
      
    
  );
}

const styles = StyleSheet.create({
  
});
