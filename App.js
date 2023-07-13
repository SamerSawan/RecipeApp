import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import RecipeDetails from './screens/RecipeDetails';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './constants/styles';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DrawerNavigator(){
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary300
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarIcon: () => (
          <Ionicons name="home-outline" size={20}/>
        )
      }} />
      <Tab.Screen name="Recipes" component={RecipesScreen} options={{
        tabBarLabel: 'Recipes',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarIcon: () => (
          <Ionicons name="book-outline" size={20}/>
        )
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Tab" component={DrawerNavigator} />
          <Stack.Screen name="Recipe Details" component={RecipeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
      
      
    
  );
}

const styles = StyleSheet.create({
  
});
