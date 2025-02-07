import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default async function isLoggedIn() {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    return false
} else {
    return true;
  }
}
