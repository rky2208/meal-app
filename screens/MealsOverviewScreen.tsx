import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MealItem from "@/components/MealItem";
import { useLayoutEffect } from "react";
const MealsOverviewScreen = ({ route }) => {
  const navigation = useNavigation();
  const openedCatId = route.params.categoryId;

  const DISPLAY_MEALS = MEALS.filter((mealItem) => {
    console.log(mealItem.categoryIds);
    return mealItem.categoryIds?.includes(openedCatId);
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((c) => c.id === openedCatId)?.title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [navigation, openedCatId]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DISPLAY_MEALS}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
