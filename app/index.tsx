import CategoriesScreen from "@/screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MealDetailsScreen from "@/screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavScreen from "@/screens/FavScreen";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContextProvider } from "@/store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "@/store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            // ❌ FIXED: Changed 'icon' prop to 'name' prop for Ionicons
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            // ❌ FIXED: Changed 'icon' prop to 'name' prop for Ionicons
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function Index() {
  return (
    <SafeAreaProvider>
      {/* Changed status bar style to light-content matching your dark background header */}
      <StatusBar style="light" translucent={true} />
      <Provider store={store}>
        <FavoritesContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                title: "About the meal",
              }}
            />
          </Stack.Navigator>
        </FavoritesContextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
