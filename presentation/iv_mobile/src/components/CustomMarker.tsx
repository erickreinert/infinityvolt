import { Callout, Marker } from "react-native-maps";
import { RechargeStationV2 } from "../mocks/rechargeStationsListV2";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  station: RechargeStationV2
  selectStation: (station: RechargeStationV2 | null) => void
}

export default function CustomMarker({station, selectStation}: Props) {
  return (
    <Marker
      onPress={(e) => {
        console.log(station.name);
        selectStation(station);
      }}
      coordinate={{
        latitude: station.latitude,
        longitude: station.longitude,
      }}
      image={require("../../assets/images/map-pin.png")}
      title={station.name}
    >
    </Marker>
  );
}


const styles = StyleSheet.create({
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#000",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15
  }
})