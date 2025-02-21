import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useAppContext } from "../contexts/AppContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomMarker from "./CustomMarker";

interface Props {
  mapRef: any;
}

export default function Maps({ mapRef }: Props) {
  const { loadingLocation, location, nearbyStations, selectStation } = useAppContext();

  return (
    <View style={styles.container}>
      {loadingLocation && (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20, color: "#fff"}}>Buscando sua localização</Text>
        </View>
      )}
      {location && (
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton
          showsTraffic
          initialCamera={{
            zoom: 18,
            center: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
            heading: 1,
            pitch: 1,
          }}
        >
          {nearbyStations.map((r, index) => {
            return (
              <CustomMarker station={r} selectStation={selectStation} key={index}/>
            );
          })}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
