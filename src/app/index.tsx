import { View, Text, StatusBar } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-neutral-900 justify-center items-center">
      <Text className="text-neutral-50">Home</Text>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
}
