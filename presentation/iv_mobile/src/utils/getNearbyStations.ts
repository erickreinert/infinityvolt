import rechargeStationsListV2, { RechargeStationV2 } from "../mocks/rechargeStationsListV2";

interface userLocation {
    latitude: number,
    longitude: number
}

function haversineDistance(loc1: userLocation, loc2: RechargeStationV2): number {
  const R = 6371; // Raio da Terra em km
  const toRad = (angle: number) => (angle * Math.PI) / 180;

  const dLat = toRad(loc2.latitude - loc1.latitude);
  const dLon = toRad(loc2.longitude - loc1.longitude);

  const lat1 = toRad(loc1.latitude);
  const lat2 = toRad(loc2.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Retorna a distância em km
}

export default function getNearbyStations(userLocation: userLocation, maxDistance: number): RechargeStationV2[] {
    return (rechargeStationsListV2.filter(loc => haversineDistance(userLocation, loc) <= maxDistance));
  }