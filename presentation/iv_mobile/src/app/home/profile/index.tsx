import BackButton from "@/src/components/BackButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <View style={{ padding: 12, gap: 12 }}>
      <BackButton />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View
          style={{
            backgroundColor: "#222222",
            borderRadius: 200,
            padding: 12,
            borderWidth: 2,
            borderColor: "#555555",
          }}
        >
          <MaterialCommunityIcons name="account" size={90} color="#fff" />
        </View>
        <Text style={{ color: "#fff", fontSize: 26, fontWeight: 900 }}>
          José Neves
        </Text>
      </View>
      <View style={{ gap: 12, marginTop: 12 }}>
        <View>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 900 }}>
            E-mail
          </Text>
          <View
            style={{ backgroundColor: "#222", padding: 8, borderRadius: 8 }}
          >
            <Text style={[styles.text, { fontSize: 18 }]}>
              josevneves@outlook.com
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 900 }}>
            Telefone
          </Text>
          <View
            style={{ backgroundColor: "#222", padding: 8, borderRadius: 8 }}
          >
            <Text style={[styles.text, { fontSize: 18 }]}>(11) 94891-7149</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 900 }}>
          Meus veículos
        </Text>
        <View
          style={{ backgroundColor: "#222", padding: 12, borderRadius: 12 }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={[styles.text, { fontSize: 20, fontWeight: 900 }]}>
                BYD
              </Text>
              <Text style={[styles.text, { fontSize: 20 }]}>Song Plus</Text>
            </View>
            <Text style={[styles.text, { fontSize: 18 }]}>2024</Text>
          </View>
          <Text style={[styles.text, { fontSize: 16 }]}>Autonomia: 350 km</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#201919",
            padding: 8,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            marginTop: 24,
          }}
        >
          <MaterialCommunityIcons name="logout" size={26} color="#fff" />
          <Text style={[styles.text, { fontSize: 20, fontWeight: 900 }]}>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
