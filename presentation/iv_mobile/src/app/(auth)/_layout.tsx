import { View, StatusBar } from "react-native";
import React from "react";
import { Slot } from "expo-router";

export default function AuthLayout() {
  return (
    <>
    <StatusBar backgroundColor={"#181818"} barStyle="light-content" />
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181818",
      }}
    >
      <Slot />
    </View>
    </>
  );
}
