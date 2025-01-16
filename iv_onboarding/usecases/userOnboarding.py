from domain.entities.users import Users
from usecases.ports.userRepository import UserRepository

class UserOnboarding: 
    def __init__(self, user: Users, repository: UserRepository):
        self.user = user
        self.repository = repository
    
    def execute(self, user: Users):
        self.repository.create(user)