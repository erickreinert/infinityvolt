import {
  FlatList,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAppContext } from "@/src/contexts/AppContext";
import Gallery from "@/src/components/Gallery";
import { Link } from "expo-router";
import BackButton from "@/src/components/BackButton";

const images = [
  require("../../../../assets/images/recharge1.jpeg"),
  require("../../../../assets/images/recharge2.jpeg"),
];

export default function RechargeStationScreen() {
  const { selectedStation } = useAppContext();

  const random = Math.random() * (2.5 - 1.5) + 1.5;
  const rating = Math.floor(Math.random() * 5 + 1);
  const ratingCount = Math.floor(Math.random() * 100);

  if (selectedStation) {
    return (
      <ScrollView>
        <Gallery imageList={images} />
        <View style={{ padding: 12 }}>
          <BackButton />
          <Text style={{ color: "#fff", fontWeight: 900, fontSize: 26 }}>
            {selectedStation.name} {rating}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <MaterialCommunityIcons
                key={index}
                name={index < rating ? "star" : "star-outline"}
                size={32}
                color="#fff"
              />
            ))}
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                marginLeft: 8,
                textDecorationLine: "underline",
              }}
            >
              {ratingCount} avaliações
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
              {selectedStation.connector_types.map((connector, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    key={index}
                  >
                    <View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 16,
                            marginRight: 8,
                          }}
                        >
                          {connector}
                        </Text>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <MaterialCommunityIcons
                            key={index}
                            name={index < rating ? "star" : "star-outline"}
                            size={18}
                            color="#fff"
                          />
                        ))}
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 14,
                            marginLeft: 8,
                            textDecorationLine: "underline",
                          }}
                        >
                          {Math.round(ratingCount / selectedStation.connector_types.length)}{" "}
                          avaliações
                        </Text>
                      </View>

                      <Text style={{ color: "gray", fontSize: 16 }}>
                        Sem informação de status
                      </Text>
                    </View>
                    <Link
                      href={"/home/rechargestation/rate"}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 16,
                            fontWeight: 900,
                          }}
                        >
                          Avaliar
                        </Text>
                        <MaterialCommunityIcons
                          key={index}
                          name={"star"}
                          size={18}
                          color="#fff"
                        />
                      </View>
                    </Link>
                  </View>
                );
              })}
            </View>
          </View>
          <Link
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
            href={"/home/rechargestation/comments"}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
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
            </View>
          </Link>
          <TouchableOpacity
            style={{
              backgroundColor: "#004aad",
              marginTop: 12,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 12,
            }}
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${selectedStation.latitude},${selectedStation.longitude}`
              )
            }
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
      </ScrollView>
    );
  }
}
