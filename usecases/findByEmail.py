from typing import List
from domain.entities.user import User
from usecases.ports.userRepository import UserRepository

class FindByEmail: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def execute(self, email: str) -> User: 
        return self.repository.find_by_email(email)
