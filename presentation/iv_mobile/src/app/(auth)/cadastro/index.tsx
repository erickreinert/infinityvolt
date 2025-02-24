import { useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";
import Separator from "@/src/components/Separator";
import { useRouter } from "expo-router";
import SelectInput from "@/src/components/SelectInput";
import Datepicker from "@/src/components/Datepicker";

const brands = [
  {
    value: "byd",
    label: "BYD",
  },
  {
    value: "gwm",
    label: "GWM",
  },
  {
    value: "renault",
    label: "Renault",
  },
  {
    value: "nissan",
    label: "Nissan",
  },
];

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    repeatPassword: "",
    phone: "",
    birthDate: new Date(),
    brand: "",
    model: "",
    year: "",
    autonomy: ""
  });

  function handleChange(campo: string, valor: string | Date) {
    setFormData((prev) => ({ ...prev, [campo]: valor }));
  }

  const navigate = useRouter();

  return (
    <ScrollView style={{ width: "100%" }}>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <View style={{ width: "70%", display: "flex", gap: 20 }}>
          <Image
            source={require("../../../../assets/images/logo-full.png")}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.text}>
              Entre com suas informações abaixo para criar sua conta!
            </Text>
          </View>
          <View style={{ display: "flex" }}>
            <Input
              onChange={(v) => handleChange("email", v)}
              placeholder=""
              value={formData.email}
              label="E-mail"
              email
            />
            <Separator />
            <Text style={styles.subtitle}>Dados</Text>
            <View style={{ display: "flex", gap: 6 }}>
              <Input
                onChange={(v) => handleChange("name", v)}
                placeholder=""
                value={formData.name}
                label="Nome"
              />
              <Input
                onChange={(v) => handleChange("surname", v)}
                placeholder=""
                value={formData.surname}
                label="Sobrenome"
              />
              <Input
                onChange={(v) => handleChange("phone", v)}
                placeholder=""
                value={formData.phone}
                label="Telefone"
              />
              <Datepicker
                value={formData.birthDate}
                label="Data de nascimento"
                onChange={(v) => handleChange("birthDate", v)}
              />
              
            </View>
            <Separator />
            <Text style={styles.subtitle}>Segurança</Text>
            <View style={{ display: "flex", gap: 6 }}>
              <Input
                onChange={(v) => handleChange("password", v)}
                placeholder=""
                label="Senha"
                value={formData.password}
                password
              />
              <Input
                onChange={(v) => handleChange("repeatPassword", v)}
                placeholder=""
                label="Repetir senha"
                value={formData.repeatPassword}
                password
              />
            </View>
            <Separator />
            <Text style={styles.subtitle}>Veículo</Text>
            <View style={{ display: "flex", gap: 6 }}>
              <SelectInput
                label="Marca do veículo"
                placeholder="Selecione..."
                value={"selectedValue"}
                onChange={(a) => handleChange("brand", a)}
                items={brands}
              />

              <Input
                onChange={(v) => handleChange("model", v)}
                placeholder=""
                label="Modelo"
                value={formData.model}
              />
              <Input
                onChange={(v) => handleChange("year", v)}
                placeholder=""
                label="Ano de fabricação"
                value={formData.year}
                number
              />
              <Input
                onChange={(v) => handleChange("autonomy", v)}
                placeholder=""
                label="Autonomia (km)"
                value={formData.autonomy}
                number
              />
            </View>
          </View>
          <Button title="Cadastrar" onClick={() => navigate.back()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: { width: "auto", height: 120 },
  title: { color: "#fff", fontSize: 32, fontWeight: 900 },
  subtitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },
  text: { color: "#fff", fontSize: 16 },
});
