import React from "react";
import { View, Text } from "react-native";

export default function StyleSettings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("StyleSettings")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        StyleSettings
      </Text>
    </View>
  );
}
