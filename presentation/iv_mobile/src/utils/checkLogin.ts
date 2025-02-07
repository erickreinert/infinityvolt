import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default async function checkLogin() {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    router.replace("/login");
} else {
    return true;
  }
}
