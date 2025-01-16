from sqlalchemy.orm import Session
from domain.entities.veichle import Vehicles
from usecases.ports.vehiclesRepository import VehiclesRepository
class VehicleRepository(VehiclesRepository):
   def __init__(self, db_session: Session):
    self.db_session = db_session

   def create(self, vehicles):
     self.db_session.add(vehicles)
     self.db_session.commit()

   def update(self, veichles_id, veichles):
     return super().update(veichles_id, veichles)
   
   def find_by_owner(self, owner_id):
     return self.db_session.query(Vehicles).filter(Vehicles.owner_id == owner_id).all()
   
   def delete(self, veichles_id):
     return super().delete(veichles_id)
   
