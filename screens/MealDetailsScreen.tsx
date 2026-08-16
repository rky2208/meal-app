import { useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "@/data/dummy-data";
import MealInfo from "@/components/MealInfo";
import Subtitle from "@/components/Subtitle";
import List from "@/components/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "@/components/IconButton";
import { FavoritesContext } from "@/store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "@/store/redux/fav";
import { store } from "@/store/redux/store";
const MealDetailsScreen = ({ navigation }) => {
  const route = useRoute();
  // const favContext = useContext(FavoritesContext);
  const favMealIds = useSelector((state) => state.favMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const isSelectedMealFav = favContext.ids.includes(mealId);
  const isSelectedMealFav = favMealIds.includes(mealId);

  console.log(isSelectedMealFav);
  const handleToggleFavPress = () => {
    if (isSelectedMealFav) {
      // favContext.removeFavHandler(mealId);
      dispatch(removeFav({ id: mealId }));
    } else {
      // favContext.addFavHandler(mealId);
      dispatch(addFav({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isSelectedMealFav ? "star" : "star-outline"}
            handlePress={handleToggleFavPress}
            color="white"
          />
        );
      },
    });
  }, [navigation, isSelectedMealFav]);
  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.img} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealInfo
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.infoText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 12,
  },
  img: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  infoText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
