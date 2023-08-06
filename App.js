import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View, Text } from "react-native";
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
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipesContextProvider from "./store/recipes-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DummyContainer = () => (
  <View className="bg-red flex-1">
    <Text>Hello World!!!</Text>
  </View>
);

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    className="justify-center items-center -top-7"
    onPress={onPress}
  >
    <View className="w-16 h-16">{children}</View>
  </TouchableOpacity>
);

function TabNavigator({ navigation }) {
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
            tabBarShowLabel: false,
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home"
                color={focused ? GlobalStyles.colors.accent500 : "#878787"}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesScreen}
          options={{
            tabBarLabel: "Recipes",
            tabBarShowLabel: false,
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="book"
                color={focused ? GlobalStyles.colors.accent500 : "#878787"}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add Recipe"
          component={AddRecipeScreen}
          options={{
            tabBarLabel: "New Recipe",
            tabBarShowLabel: false,
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="add-circle"
                color={GlobalStyles.colors.accent500}
                size={60}
              />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("Add Recipe");
            },
          })}
        />
        <Tab.Screen
          name="Grocery"
          component={GroceryScreen}
          options={{
            tabBarLabel: "Grocery",
            tabBarShowLabel: false,
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="cart-outline"
                color={focused ? GlobalStyles.colors.accent500 : "#878787"}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarShowLabel: false,
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person-outline"
                color={focused ? GlobalStyles.colors.accent500 : "#878787"}
                size={30}
              />
            ),
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
          <RecipesContextProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Tab" component={TabNavigator} />
              <Stack.Screen name="Recipe Details" component={RecipeDetails} />
              <Stack.Screen
                name="Add Recipe"
                component={AddRecipeScreen}
                options={{
                  presentation: "modal",
                }}
              />
            </Stack.Navigator>
          </RecipesContextProvider>
        </FavouritesContextProvider>
      </NavigationContainer>
    </>
  );
}
