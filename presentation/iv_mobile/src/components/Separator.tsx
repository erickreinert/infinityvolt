import { StyleSheet, View } from "react-native";

export default function Separator() {
  return <View style={styles.linha}></View>;
}

const styles = StyleSheet.create({
  linha: {
    borderTopColor: "white",
    borderTopWidth: 2,
    marginTop: 20,
    marginBottom: 20,
  },
});
