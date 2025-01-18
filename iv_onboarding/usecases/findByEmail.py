import re
from domain.entities.users import Users
from usecases.ports.userRepository import UserRepository

class FindByEmail: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self, email: str) -> Users:
        return self.repository.find_by_email(email)
