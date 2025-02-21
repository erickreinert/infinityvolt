import { useAppContext } from "@/src/contexts/AppContext";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function StationPopup() {
  const { selectedStation } = useAppContext();
  if (selectedStation) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{selectedStation.name}</Text>
        <Text style={styles.address}>{selectedStation.address}</Text>
        <Text style={styles.subheader}>Tipos de conectores</Text>
        <View style={styles.connectorsContainer}>
          <FlatList
            data={selectedStation.connector_types}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
        </View>
        <Link
          href={"/home/rechargestation"}
          style={{ display: "flex", flex: 1 }}
        >
          <View style={styles.button}>
            <Text style={{ color: "#fff", fontWeight: 600, fontSize: 18 }}>
              Ver detalhes
            </Text>
          </View>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 18
  },
  header: {
    fontSize: 20,
    fontWeight: 900,
  },
  address: {
    fontSize: 14,
  },
  button: {
    display: "flex",
    width: "100%",
    backgroundColor: "#004aad",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#013e8f",
    padding: 6
  },
  subheader: {
    fontSize: 16,
    fontWeight: 700,
  },
  connectorsContainer: {
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
  },
});
