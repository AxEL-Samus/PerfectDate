import React from "react";
import { View, Text } from "react-native";

export default function NameChange({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("NameChange")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        NameChange
      </Text>
    </View>
  );
}
