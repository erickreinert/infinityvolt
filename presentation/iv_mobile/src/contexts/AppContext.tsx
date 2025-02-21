import { LocationObject } from "expo-location";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { RechargeStationV2 } from "../mocks/rechargeStationsListV2";
import getNearbyStations from "../utils/getNearbyStations";
import getLocation from "../utils/getLocation";

// Define a tipagem do contexto
interface AppContextType {
  location: LocationObject | null;
  nearbyStations: RechargeStationV2[];
  selectedStation: RechargeStationV2 | null
  selectStation: (station: RechargeStationV2 | null) => void
  fetchLocation: () => void
  loadingLocation: boolean
}

// Criando o Contexto com valor inicial null
const AppContext = createContext<AppContextType | undefined>(undefined);

// Criando um Provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loadingLocation, setLoadingLocation] = useState(false)
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [nearbyStations, setNearbyStations] = useState<RechargeStationV2[]>([]);
  const [selectedStation, setSelectedStation] =useState<RechargeStationV2 | null>(null);

  useEffect(() => {
    fetchLocation()
  }, [])

  function selectStation(station: RechargeStationV2 | null) {
    setSelectedStation(station)
  }

  async function fetchLocation() {
      setLoadingLocation(true);
      console.log("Buscando localização do usuário")
      const location = await getLocation();
      console.log("Localização encontrada")
      if (location) {
        setLocation(location);
        setNearbyStations(getNearbyStations({latitude: location.coords.latitude, longitude: location.coords.longitude}, 3))
      }
      setLoadingLocation(false);
    }

  return (
    <AppContext.Provider value={{ location, nearbyStations, selectedStation, loadingLocation, selectStation, fetchLocation }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
