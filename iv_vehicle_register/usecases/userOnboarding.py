from domain.entities.vehicle import Vehicle
from usecases.ports.userRepository import UserRepository

class UserOnboarding: 
    def __init__(self, user: Vehicle, repository: UserRepository):
        self.user = user
        self.repository = repository
    
    def execute(self, user: Vehicle):
        self.repository.create(user)