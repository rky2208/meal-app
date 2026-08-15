import { View, Text, StyleSheet } from "react-native";

const MealInfo = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.info, style]}>
      <Text style={[styles.infoItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.infoItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.infoItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealInfo;

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  infoItem: {
    marginHorizontal: 4,
    fontSize: 8,
  },
});
