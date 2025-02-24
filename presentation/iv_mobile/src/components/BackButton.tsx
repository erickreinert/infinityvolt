import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function BackButton() {
  return (
    <TouchableOpacity
      style={{ marginBottom: 12, flexDirection: "row", gap: 8, alignItems: "center", backgroundColor: "#222222", width: 100, justifyContent: "center", borderRadius: 8, padding: 4 }}
      onPress={() => router.back()}
    >
      <FontAwesome5 name="caret-left" size={24} color="#fff" />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 900,
          color: "#fff",
        }}
      >
        Voltar
      </Text>
    </TouchableOpacity>
  );
}
