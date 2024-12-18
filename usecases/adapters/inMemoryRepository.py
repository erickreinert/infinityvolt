from domain.entities.user import User
from usecases.ports.userRepository import UserRepository


class InMemoryUserRepository(UserRepository):
    def __init__(self):
        self.users = []

    def create(self, user: User):
        self.users.append(user)

    def find_by_email(self, email):
        for user in self.users:
            if user.email == email:
                return user