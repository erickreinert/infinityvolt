export interface RechargeStation {
  id: number;
  name: string;
  endereco: string;
  latitude: number;
  longitude: number;
}

const rechargeStationsList: RechargeStation[] = [
  {
    id: 1,
    name: "Shopping Cidade São Paulo",
    endereco: "Avenida Paulista, 1234",
    latitude: -23.5640878,
    longitude: -46.6530078,
  },
  {
    id: 2,
    name: "Eletroposto Volvo",
    endereco: "Avenida Paulista, 4321",
    latitude: -23.5623833,
    longitude: -46.658781,
  },
];



export default rechargeStationsList