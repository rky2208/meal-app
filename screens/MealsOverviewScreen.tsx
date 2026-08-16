import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "@/components/MealsList";
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
  return <MealsList items={DISPLAY_MEALS} />;
};

export default MealsOverviewScreen;
