import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, usePathname } from "expo-router";

export default function Navbar() {
  const pathname = usePathname(); // Obtém o caminho atual

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/login");
  };

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
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "900" }}>
          Infinity Volt
        </Text>
      </View>

      <View style={{ paddingRight: 12, flexDirection: "row", gap: 24 }}>
        {/* Esconde o botão de perfil se o usuário estiver na página de perfil */}
        {pathname !== "/home/profile" && (
          <TouchableOpacity onPress={() => router.push("/home/profile")}>
            <MaterialCommunityIcons name="account" size={32} color="#fff" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleLogout}>
          <MaterialCommunityIcons name="logout" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
