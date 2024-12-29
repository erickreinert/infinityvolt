from typing import List
from domain.entities.user import User
from usecases.ports.userRepository import UserRepository

class GetUsers: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self) -> List[User]: 
        return self.repository.find_all()
