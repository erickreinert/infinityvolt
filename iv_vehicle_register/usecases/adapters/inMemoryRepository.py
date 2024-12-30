from typing import List, Optional
from domain.entities.user import User
from usecases.ports.userRepository import UserRepository

class InMemoryUserRepository(UserRepository):
    def __init__(self):
        self.users: List[User] = []

    def create(self, user: User):
        self.users.append(user)

    def find_all(self) -> List[User]:
        return self.users

    def update(self, user_id: int, updated_user: User) -> bool:
        for index, existing_user in enumerate(self.users):
            if existing_user.id == user_id:
                self.users[index] = updated_user
                return True
        return False

    def delete(self, user_id: int) -> bool:
        for index, existing_user in enumerate(self.users):
            if existing_user.id == user_id:
                del self.users[index]
                return True
        return False
