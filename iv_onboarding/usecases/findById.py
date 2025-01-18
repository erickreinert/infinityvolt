from domain.entities.users import Users
from usecases.ports.userRepository import UserRepository

class FindById: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self, id: str) -> Users: 
        return self.repository.find_by_id(id)
