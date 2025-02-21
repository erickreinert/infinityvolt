import { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import MapView from "react-native-maps";
import checkLogin from "@/src/utils/checkLogin";
import Maps from "@/src/components/Maps";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useAppContext } from "@/src/contexts/AppContext";
import StationPopup from "./components/StationPopup/StationPopup";

export default function ProtectedScreen() {
  const { location, selectStation, selectedStation, nearbyStations } =
    useAppContext();
  const mapRef = useRef<MapView>();

  useEffect(() => {
    checkLogin();
  }, []);

  // const handleLogout = async () => {
  //   await AsyncStorage.removeItem("token");
  //   router.replace("/login");
  // };

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
      </View>
      <Maps mapRef={mapRef} />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: 12,
          flexDirection: "row",
          gap: 8,
        }}
      >
        <StationPopup />
        {!selectedStation && (
          <View
            style={{
              width: 72,
              gap: 8,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                width: 72,
                height: 72,
                borderRadius: 56,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: "#c7c7c7",
              }}
              onPress={() => Alert.alert("Abrindo no waze")}
            >
              <AntDesign name="plus" size={36} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 12,
  },
});
