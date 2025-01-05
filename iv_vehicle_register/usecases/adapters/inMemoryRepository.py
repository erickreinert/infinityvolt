from typing import List, Optional
from domain.entities.vehicle import Vehicle
from usecases.ports.userRepository import UserRepository

class InMemoryUserRepository(UserRepository):
    def __init__(self):
        self.users: List[Vehicle] = []

    def create(self, user: Vehicle):
        self.users.append(user)

    def find_all(self) -> List[Vehicle]:
        return self.users

    def update(self, user_id: int, updated_user: Vehicle) -> bool:
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
