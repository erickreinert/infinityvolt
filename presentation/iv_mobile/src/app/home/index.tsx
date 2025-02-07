import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapView from "react-native-maps";
import checkLogin from "@/src/utils/checkLogin";
import Maps from "@/src/components/Maps";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import rechargeStationsList, {
  RechargeStation,
} from "@/src/mocks/rechargeStationsList";
import Button from "@/src/components/Button";
import getLocation from "@/src/utils/getLocation";

export default function ProtectedScreen() {
  const mapRef = useRef<MapView>();
  const [selectedStation, setSelectedStation] =
    useState<RechargeStation | null>(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/login");
  };

  function goToLocation(
    lat: number,
    long: number,
    options?: { zoom?: number }
  ) {
    mapRef.current?.animateCamera(
      {
        zoom: options?.zoom ? options.zoom : 20,
        center: {
          latitude: lat,
          longitude: long,
        },
        heading: 1,
        pitch: 1,
      },
      { duration: 1000 }
    );
  }

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>
            Eletropostos próximos a você
          </Text>
          <TouchableOpacity
            onPress={async () => {
              const location = await getLocation();
              if (location) {
                goToLocation(
                  location.coords.latitude,
                  location.coords.longitude,
                  { zoom: 18 }
                );
              }
            }}
          >
            <Text
              style={{
                color: "white",
                textDecorationLine: "underline",
                textDecorationColor: "white",
                fontSize: 16,
              }}
            >
              Centralizar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 12 }}>
          {rechargeStationsList.map((r, index) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor:
                    selectedStation?.id === r.id ? "#bbbbbb" : "#f0f0f0",
                  borderRadius: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <View style={{ padding: 12 }}>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>
                    {r.name}
                  </Text>
                  <Text style={{ fontSize: 12 }}>{r.endereco}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedStation(r);
                    goToLocation(r.latitude, r.longitude);
                  }}
                  style={{
                    backgroundColor: "#004aad",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 12,
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={32}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <Maps mapRef={mapRef} />
      {selectedStation && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: 12,
          }}
        >
          <Button
            title="Abrir no Waze"
            onClick={() => Alert.alert("Abrindo no waze")}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 12,
  },
});
