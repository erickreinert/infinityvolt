from domain.entities.user import User
from usecases.ports.userRepository import UserRepository

class UserOnboarding: 
    def __init__(self, user: User, repository: UserRepository):
        self.user = user
        self.repository = repository
    
    def execute(self, user: User):
        self.repository.create(user)