import MealsList from "@/components/MealsList";
import { MEALS } from "@/data/dummy-data";
import { FavoritesContext } from "@/store/context/favorites-context";
import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

const FavScreen = () => {
  // const favContext = useContext(FavoritesContext);
  // const favMeals = MEALS.filter((m) => favContext.ids.includes(m.id));
  const favMealIds = useSelector((state) => state.favMeals.ids);
  const favMeals = MEALS.filter((m) => favMealIds.includes(m.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no fav meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favMeals} />;
};

export default FavScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
