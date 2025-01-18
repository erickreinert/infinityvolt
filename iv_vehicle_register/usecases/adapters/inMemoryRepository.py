from typing import List
from domain.entities.veichle import Vehicles
from usecases.ports.vehiclesRepository import VehiclesRepository

class InMemoryVehiclesRepository():
    def __init__(self):
        self.vehicles: List[Vehicles] = []

    def create(self, vehicles: Vehicles):
        self.vehicles.append(vehicles)

    def update(self, vehicles_id: int, updated_vehicles: Vehicles) -> bool:
        for index, existing_vehicles in enumerate(self.vehicles):
            if existing_vehicles.id == vehicles_id:
                self.vehicles[index] = updated_vehicles
                return True
        return False

    def delete(self, vehicles_id: int) -> bool:
        for index, existing_vehicles in enumerate(self.vehicles):
            if existing_vehicles.id == vehicles_id:
                del self.vehicles[index]
                return True
        return False
