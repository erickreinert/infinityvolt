import Thumbnail from "@/src/components/Thumbnail";

import { FlatList, Linking, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Button from "@/src/components/Button";
import { useAppContext } from "@/src/contexts/AppContext";
import Gallery from "@/src/components/Gallery";

const images = [
  require("../../../../assets/images/recharge1.jpeg"),
  require("../../../../assets/images/recharge2.jpeg"),
];

export default function RechargeStationScreen() {
  const { selectedStation } = useAppContext();

  const random = Math.random() * (2.5 - 1.5) + 1.5;

  if (selectedStation) {
    return (
      <View>
        {/* <Button title="Voltar" variant="link" href="/home" /> */}
        <Gallery imageList={images} />
        <View style={{ padding: 12 }}>
          <Text style={{ color: "#fff", fontWeight: 900, fontSize: 26 }}>
            {selectedStation.name}
          </Text>

          <Text
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: 20,
              marginTop: 12,
            }}
          >
            Endereço
          </Text>
          <View
            style={{
              backgroundColor: "#222222",
              padding: 12,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>
              {selectedStation.address}
            </Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: 20,
              marginTop: 12,
            }}
          >
            Preço (kWh)
          </Text>
          <View
            style={{
              backgroundColor: "#222222",
              padding: 12,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>
              R$ {random.toFixed(2)}
            </Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: 20,
              marginTop: 12,
            }}
          >
            Horário de funcionamento
          </Text>
          <View
            style={{
              backgroundColor: "#222222",
              padding: 12,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>
              {random >= 2 ? "24 horas" : "Entre as 08:00 e 22:00"}
            </Text>
          </View>
          <Text
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: 20,
              marginTop: 12,
            }}
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
              <FlatList
                data={selectedStation.connector_types}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <>
                    <Text
                      style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}
                    >
                      {item}
                    </Text>
                    <Text style={{ color: "gray", fontSize: 16 }}>
                      Sem informação de status
                    </Text>
                  </>
                )}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#fff",
              backgroundColor: "#ffffff05",
              marginTop: 12,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 12,
            }}
            onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${selectedStation.latitude},${selectedStation.longitude}`)}
          >
            <MaterialCommunityIcons name="chat" size={26} color="#fff" />
            <Text
              style={{
                color: "#fff",
                padding: 12,
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              Comentários
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#004aad",
              marginTop: 12,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 12,
            }}
            onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${selectedStation.latitude},${selectedStation.longitude}`)}
          >
            <MaterialCommunityIcons name="google-maps" size={26} color="#fff" />
            <Text
              style={{
                color: "#fff",
                padding: 12,
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              Abrir no Maps
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
