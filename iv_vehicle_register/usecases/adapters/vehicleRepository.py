from sqlalchemy.orm import Session
from domain.entities.veichle import Vehicles
from domain.enums.status import Status
from usecases.ports.vehiclesRepository import VehiclesRepository
class VehicleRepository(VehiclesRepository):
   def __init__(self, db_session: Session):
    self.db_session = db_session

   def create(self, vehicles):
     self.db_session.add(vehicles)
     self.db_session.commit()

   def update(self, veichles_id, veichles):
     findedVehicle = self.db_session.query(Vehicles).filter(Vehicles.vehicle_id == veichles_id).first()
     if findedVehicle:
            findedVehicle.model_year = veichles['model_year']
            findedVehicle.brand_name = veichles['brand_name']
            findedVehicle.autonomy = veichles['autonomy']
            findedVehicle.model_name = veichles['model_name']
            
            self.db_session.commit()
            self.db_session.refresh(findedVehicle)
     return findedVehicle
   
   def find_by_owner(self, owner_id):
     return self.db_session.query(Vehicles).filter(Vehicles.owner_id == owner_id).all()
   
   def find_by_id(self, id:str) -> Vehicles:
        id = id.strip()
        return self.db_session.query(Vehicles).filter(Vehicles.vehicle_id == id).first()
   
   def delete(self, veichles_id):
     findedVehicle = self.db_session.query(Vehicles).filter(Vehicles.vehicle_id == veichles_id).first()
     if findedVehicle:
            findedVehicle.status = Status.DEACTIVATED.value
            self.db_session.commit()
            self.db_session.refresh(findedVehicle)
     return findedVehicle
   
