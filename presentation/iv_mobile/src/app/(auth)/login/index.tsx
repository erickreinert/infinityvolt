import { useState } from "react";
import { View, Alert, Image, StyleSheet, Text } from "react-native";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email && password) {
      await AsyncStorage.setItem("token", "fake-token");
      router.replace("/home");
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    }
  }

  return (
    <View style={{ width: "70%", display: "flex", gap: 20 }}>
      <Image
        source={require("../../../../assets/images/logo-full.png")}
        style={styles.logo}
      />
      <View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>
          Digite seu usuário e senha para acessar!
        </Text>
      </View>
      <View style={{display: "flex", gap: 12}}>
        <Input
          onChange={(v) => setEmail(v)}
          placeholder="E-mail"
          value={email}
        />
        <Input
          onChange={(v) => setPassword(v)}
          placeholder="Senha"
          value={password}
        />
      </View>
      <Button title="Login" onClick={() => handleLogin()} />
      <Button title="Cadastrar" variant="link" href="/cadastro" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { width: "auto", height: 120 },
  title: { color: "#fff", fontSize: 32, fontWeight: 900 },
  text: { color: "#fff", fontSize: 16 },
});
