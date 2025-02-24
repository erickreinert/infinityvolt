import BackButton from "@/src/components/BackButton";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import Radio from "@/src/components/Radio";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function RateScreen() {
  const [formData, setFormData] = useState({
    rechargeTime: "0",
    conditions: true,
    queue: false,
    cost: "0",
    stars: 1,
    observations: "",
  });

  function handleChange(field: string, value: string | number | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <View style={{ padding: 12 }}>
        <BackButton />
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: 900,
          marginBottom: 12,
        }}
      >
        Avalie o conector do eletroposto
      </Text>
      <Text style={{ color: "#fff", fontSize: 18 }}>
        Quanto tempo (minutos) levou para carregar seu veículo?
      </Text>
      <Input
        onChange={(v) => handleChange("rechargeTime", v)}
        value={formData.rechargeTime}
        placeholder=""
      />
      <Text style={{ color: "#fff", fontSize: 18, marginTop: 12 }}>
        O eletroposto estava em boas condições?
      </Text>
      <Radio
        value={formData.conditions}
        onChange={(v) => handleChange("conditions", v)}
      />
      <Text style={{ color: "#fff", fontSize: 18, marginTop: 12 }}>
        Havia fila no local?
      </Text>
      <Radio
        value={formData.queue}
        onChange={(v) => handleChange("queue", v)}
      />
      <Text style={{ color: "#fff", fontSize: 18, marginTop: 12 }}>
        Qual o custo por kWH do local?
      </Text>
      <Input
        onChange={(v) => handleChange("cost", v)}
        value={formData.cost}
        placeholder=""
      />
      <Text style={{ color: "#fff", fontSize: 18, marginTop: 12 }}>
        Quantas estrelas você dá ao eletroposto? Sendo 1 ruim e 5 ótimo
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleChange("stars", index + 1)}
          >
            <MaterialCommunityIcons
              key={index}
              name={index < formData.stars ? "star" : "star-outline"}
              size={42}
              color="#fff"
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ color: "#fff", fontSize: 18, marginTop: 12 }}>
        Comentários adicionais
      </Text>
      <Input
        onChange={(v) => handleChange("observations", v)}
        value={formData.observations}
        placeholder=""
      />
      <View style={{marginTop: 24}}>
        <Button
          onClick={() => Alert.alert("Salvando avaliação")}
          title="Salvar avaliação"
        />
      </View>
    </View>
  );
}
