from typing import List
from domain.entities.users import Users
from usecases.ports.userRepository import UserRepository

class GetUsers: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self) -> List[Users]: 
        return self.repository.find_all()
