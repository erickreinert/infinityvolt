import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Navbar() {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          padding: 12,
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
        />
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 900 }}>
          Infinity Volt
        </Text>
      </View>
      <TouchableOpacity style={{paddingRight: 12}} onPress={() => Alert.alert("Menu")}>
        <MaterialIcons name="menu" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
