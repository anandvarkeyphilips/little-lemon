import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#F4CE14" }}>
      <Text
        style={{ paddingHorizontal: 20, fontSize: 30, color: "black" }}
        numberOfLines={2}
      >
        Welcome to
      </Text>
      <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 30,
          color: "black",
          fontWeight: "bold",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
