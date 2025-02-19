import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect } from "react";
import isLoggedIn from "../utils/isLoggedIn";

export default function HomeScreen() {
  // useEffect(() => {
  //   const check = async () => {
  //     if (await isLoggedIn()) {
  //       router.replace("/home");
  //     }
  //   };
  //   check()
  // }, []);

  return (
    <>
      <StatusBar backgroundColor={"#000"} barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Image
              source={require("../../assets/images/logo-full.png")}
              style={styles.logo}
            />
            <View style={styles.linha}></View>
            <Text style={styles.text}>
              Seja bem-vindo a uma nova experiência para donos de veículos
              elétricos! Faça login ou cadastre-se para aproveitar todos os
              benefícios que a Infinity Volt pode te oferecer!
            </Text>

            <Link href="/login" asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.text}>Entrar</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 16,
    borderRadius: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 300,
    height: 120,
    resizeMode: "contain",
  },
  linha: {
    borderTopColor: "white",
    borderTopWidth: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#004aad",
    marginTop: 20,
    padding: 10,
    borderRadius: 12,
  },
  safeArea: {
    flex: 1,
  },
});
