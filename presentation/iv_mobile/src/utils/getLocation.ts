import * as Location from "expo-location";
import { Alert } from "react-native";

export default async function getLocation() {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão negada", "Não foi possível acessar a localização");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    return currentLocation;
  } catch (error) {
    console.error("Erro ao obter localização:", error);
  }
}
