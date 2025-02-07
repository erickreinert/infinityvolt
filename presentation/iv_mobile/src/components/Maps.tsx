import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { LocationObject } from "expo-location";
import getLocation from "../utils/getLocation";
import rechargeStationsList from "../mocks/rechargeStationsList";

interface Props {
  mapRef: any;
}

export default function Maps({ mapRef }: Props) {
  const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  async function fetchLocation() {
    const location = await getLocation();
    if (location) setLocation(location);
  }
  return (
    <View style={styles.container}>
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
          {rechargeStationsList.map((r, index) => {
            return (
              <Marker
                key={index}
                onPress={(e) => {
                  console.log(index);
                }}
                coordinate={{
                  latitude: r.latitude,
                  longitude: r.longitude,
                }}
              />
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
