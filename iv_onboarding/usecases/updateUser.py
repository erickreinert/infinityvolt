from domain.entities.users import Users
from usecases.ports.userRepository import UserRepository

class UpdateUser: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self, id, user: Users) -> Users:
        self.repository.update(id, user)