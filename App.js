import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import RecipesScreen from "./screens/RecipesScreen";
import RecipeDetails from "./screens/RecipeDetails";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";
import SearchContextProvider from "./store/search-context";
import FavouritesContextProvider from "./store/favourites-context";
import GroceryScreen from "./screens/GroceryScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <SearchContextProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary300,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({focused}) => <Ionicons name="home" color={focused ? GlobalStyles.colors.accent500 : '#878787'} size={20} />,
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesScreen}
          options={{
            tabBarLabel: "Recipes",
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({focused}) => <Ionicons name="book" color={focused ? GlobalStyles.colors.accent500 : '#878787'} size={20} />,
          }}
        />
        <Tab.Screen 
          name="Grocery"
          component={GroceryScreen}
          options={{
            tabBarLabel: "Grocery",
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({focused}) => <Ionicons name="cart-outline" color={focused ? GlobalStyles.colors.accent500 : '#878787'} size={20}/>,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({focused}) => <Ionicons name="person-outline" color={focused ? GlobalStyles.colors.accent500 : '#878787'} size={20}/>
          }}
          />
      </Tab.Navigator>
    </SearchContextProvider>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <FavouritesContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen name="Recipe Details" component={RecipeDetails} />
          </Stack.Navigator>
        </FavouritesContextProvider>
      </NavigationContainer>
    </>
  );
}

