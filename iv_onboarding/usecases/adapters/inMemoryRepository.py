from typing import List
from domain.entities.user import User
from usecases.ports.userRepository import UserRepository



class InMemoryUserRepository(UserRepository):
    def __init__(self):
        self.users: List[User] = []

    def create(self, user: User):
        self.users.append(user)

    def find_by_email(self, email) -> User:
        for user in self.users:
            if user.email == email:
                return user
    
    def find_by_id(self, id) -> User:
        for user in self.users:
            if user.id == id:
                return user
    
    def find_all(self) -> List[User]:
        return self.users