import IVeiculo from "@/interfaces/IVeiculo";
import axios from "axios";
import { useState } from "react";

export default function useListarVeiculos() {
  const [isLoadingVehicle, setIsLoadingVehicle] = useState(false)
  const [listaVeiculos, setListaVeiculos] = useState<IVeiculo[]>([])

  async function fetchVehicles(userId: string) {
    setIsLoadingVehicle(true);
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_BFF_URL + '/vehicle/owner/' + userId);
      console.log(res.data)
      setListaVeiculos(res.data.data as IVeiculo[])
      // location.href = '/login';
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingVehicle(false);
    }
  }

  return {fetchVehicles, isLoadingVehicle, listaVeiculos}
}
