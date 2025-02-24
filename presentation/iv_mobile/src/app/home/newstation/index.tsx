import BackButton from "@/src/components/BackButton";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useAppContext } from "@/src/contexts/AppContext";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function NewStationScreen() {
  const { location } = useAppContext();
  const mapRef = useRef<MapView>();

  const [formData, setFormData] = useState({
    address: "",
    connector_types: [],
    name: "",
    openingHour: "",
    closedHour: "",
  });
  const [customHour, setCustomHour] = useState(false);

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function goToLocation(
    lat: number,
    long: number,
    options?: { zoom?: number }
  ) {
    mapRef.current?.animateCamera(
      {
        zoom: options?.zoom ? options.zoom : 20,
        center: {
          latitude: lat,
          longitude: long,
        },
        heading: 1,
        pitch: 1,
      },
      { duration: 500 }
    );
  }

  useEffect(() => {
    if (location) {
      setTimeout(() => {
        goToLocation(location.coords.latitude, location.coords.longitude, {
          zoom: 18,
        });
      }, 200);
    }
  }, [location]);

  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <Text
        style={[
          styles.text,
          { fontSize: 22, fontWeight: 900, marginBottom: 12 },
        ]}
      >
        Adicionar eletroposto
      </Text>
      <Text style={[styles.text, { fontSize: 18, marginBottom: 12 }]}>
        Certifique-se de que esteja no local da estação no momento do cadastro.
        Dessa forma realizaremos a captura da latitude e longitude exata do
        eletroposto
      </Text>
      <View
        style={{
          backgroundColor: "#222222",
          padding: 12,
          borderRadius: 8,
          marginBottom: 24,
        }}
      >
        <Text style={[styles.text, { marginBottom: 8 }]}>MAPA</Text>
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "yellow",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <View style={{ flex: 1 }}>
            <MapView
              ref={mapRef as any}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              followsUserLocation={true}
              showsMyLocationButton
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </View>
      <View style={{ gap: 12, marginBottom: 12 }}>
        <Input
          placeholder=""
          label="Nome do eletroposto"
          value={formData.name}
          onChange={(v) => handleChange("name", v)}
        />
        <Input
          placeholder=""
          label="Endereço"
          value={formData.address}
          onChange={(v) => handleChange("address", v)}
        />
      </View>
      <Text
        style={{
          color: "#fff",
          fontWeight: 500,
          marginBottom: 6,
          fontSize: 16,
        }}
      >
        Horário de funcionamento
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => setCustomHour(false)}
          style={{
            backgroundColor: !customHour ? "#004aad" : "transparent",
            width: "49%",
            padding: 12,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: !customHour ? "#004aad" : "#fff",
          }}
        >
          <View>
            <Text style={[styles.text, { fontWeight: 900, fontSize: 16 }]}>
              24 horas
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCustomHour(true)}
          style={{
            backgroundColor: customHour ? "#004aad" : "transparent",
            width: "49%",
            padding: 12,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: customHour ? "#004aad" : "#fff",
          }}
        >
          <View>
            <Text style={[styles.text, { fontWeight: 900, fontSize: 16 }]}>
              Horário personalizado
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {customHour && (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ width: "48%" }}>
            <Input
              placeholder=""
              label="Horário de abertura"
              onChange={(v) => handleChange("openingHour", v)}
              value={formData.openingHour}
            />
          </View>
          <View style={{ width: "48%" }}>
            <Input
              placeholder=""
              label="Horário de fechamento"
              onChange={(v) => handleChange("closedHour", v)}
              value={formData.closedHour}
            />
          </View>
        </View>
      )}
      <View style={{ marginTop: 12 }}>
        <Button
          onClick={() => Alert.alert("Salvando eletroposto")}
          title="Salvar informações"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  text: {
    color: "#fff",
  },
});
