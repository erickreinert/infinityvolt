import { View, StatusBar } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import Navbar from "@/src/components/Navbar";
import { AppProvider } from "@/src/contexts/AppContext";

export default function HomeLayout() {
  return (
    <AppProvider>
      <StatusBar backgroundColor={"#000"} barStyle="light-content" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#181818",
        }}
      >
        <Navbar />
        <Slot />
      </View>
    </AppProvider>
  );
}
