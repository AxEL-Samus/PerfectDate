import * as React from "react";
import { View, Text } from "react-native";

export default function AddScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("AddScreen")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        AddScreen
      </Text>
    </View>
  );
}
