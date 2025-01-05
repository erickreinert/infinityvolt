from typing import List
from domain.entities.vehicle import Vehicle
from usecases.ports.userRepository import UserRepository

class GetUsers: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self) -> List[Vehicle]: 
        return self.repository.find_all()
