import React from "react";
import { View, Text } from "react-native";

export default function Push({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Push")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Push
      </Text>
    </View>
  );
}
