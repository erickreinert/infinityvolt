import Thumbnail from "@/src/components/Thumbnail";

import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Button from "@/src/components/Button";

const images = [
  require("../../../../assets/images/recharge1.jpeg"),
  require("../../../../assets/images/recharge2.jpeg"),
];

export default function RechargeStationScreen() {
  return (
    <View style={{ padding: 12 }}>
        <Button title="Voltar" variant="link" href="/home"/>
      <Text style={{ color: "#fff", fontWeight: 900, fontSize: 28 }}>
        Eletroposto Volvo
      </Text>
      <Text
        style={{ color: "#fff", fontWeight: 500, fontSize: 20, marginTop: 12 }}
      >
        Fotos
      </Text>
      <View
        style={{
          backgroundColor: "#222222",
          padding: 12,
          borderRadius: 12,
          flexDirection: "row",
          gap: 12,
        }}
      >
        {images.map((i, index) => (
          <Thumbnail key={index} imagePath={i} />
        ))}
      </View>
      <Text
        style={{ color: "#fff", fontWeight: 500, fontSize: 20, marginTop: 12 }}
      >
        Endereço
      </Text>
      <View
        style={{ backgroundColor: "#222222", padding: 12, borderRadius: 12 }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
            Logradouro:{" "}
          </Text>
          <Text style={{ color: "#fff", fontSize: 18 }}>Avenida Paulista</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
            Número:{" "}
          </Text>
          <Text style={{ color: "#fff", fontSize: 18 }}>1234</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
            Complemento:{" "}
          </Text>
          <Text style={{ color: "#fff", fontSize: 18 }}>
            Dentro do shopping XYZ
          </Text>
        </View>
      </View>
      <Text
        style={{ color: "#fff", fontWeight: 500, fontSize: 20, marginTop: 12 }}
      >
        Carregadores
      </Text>
      <View
        style={{
          backgroundColor: "#222222",
          padding: 12,
          borderRadius: 12,
          gap: 10,
        }}
      >
        <View>
          <Text style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
            - Tipo 1 (SAE J1772)
          </Text>
          <Text style={{ color: "green", fontSize: 16 }}>Disponível</Text>
        </View>
        <View>
          <Text style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
            - Tipo 1 (SAE J1772)
          </Text>
          <Text style={{ color: "gray", fontSize: 16 }}>Em manutenção</Text>
        </View>
        <View>
          <Text style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
            - GB/T
          </Text>
          <Text style={{ color: "red", fontSize: 16 }}>Quebrado</Text>
        </View>
        <View>
          <Text style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
            - CSS
          </Text>
          <Text style={{ color: "green", fontSize: 16 }}>Disponível</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#004aad",
          marginTop: 12,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 12,
        }}
      >
        <FontAwesome5 name="waze" size={26} color="#fff" />
        <Text
          style={{ color: "#fff", padding: 12, fontSize: 18, fontWeight: 800 }}
        >
          Abrir no Waze
        </Text>
      </TouchableOpacity>
    </View>
  );
}
