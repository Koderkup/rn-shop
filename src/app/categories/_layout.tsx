import { Stack } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function CategoryLayout() {
  <Stack>
    <Stack.Screen
      name="[slug]"
      options={({ navigation }) => ({
        headerShown: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={"black"} />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack>;
}
