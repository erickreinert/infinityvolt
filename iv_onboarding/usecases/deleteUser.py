from domain.entities.users import Users
from usecases.ports.userRepository import UserRepository

class DeleteUser: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self, id) -> Users:
        self.repository.delete(id)