from domain.entities.user import User
from usecases.ports.userRepository import UserRepository

class FindById: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self, id: str) -> User: 
        return self.repository.find_by_id(id)
