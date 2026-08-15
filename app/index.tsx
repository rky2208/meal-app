import CategoriesScreen from "@/screens/CategoriesScreen";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import MealDetailsScreen from "@/screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
      <StatusBar style={"dark"} />
      <SafeAreaView style={styles.root}>
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
            name="MealsCategorues"
            component={CategoriesScreen}
            options={{
              title: "All Category",
              // headerStyle: {
              //   backgroundColor: "#351401",
              // },
              // headerTintColor: "white",
              // contentStyle: {
              //   backgroundColor: "#3f2f25",
              // },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catID = route.params.categoryId;
            //   return {
            //     title: catID,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            // options={{
            //   headerRight: () => {
            //     return <Text>Hi</Text>;
            //   },
            // }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
