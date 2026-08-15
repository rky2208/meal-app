import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "@/data/dummy-data";
import MealInfo from "@/components/MealInfo";
import Subtitle from "@/components/Subtitle";
import List from "@/components/List";
import { useLayoutEffect } from "react";
import IconButton from "@/components/IconButton";

const MealDetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const handlePress = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" onPress={handlePress} color="white" />;
      },
    });
  }, [navigation]);
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
