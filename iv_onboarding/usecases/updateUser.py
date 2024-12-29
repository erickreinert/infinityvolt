from domain.entities.user import User
from usecases.ports.userRepository import UserRepository

class UpdateUser: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self, index, user: User) -> User:
        self.repository.update(index, user)