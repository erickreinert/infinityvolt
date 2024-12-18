from abc import ABC, abstractmethod
from domain.entities.user import User

class UserRepository(ABC):
    @abstractmethod
    def create(self, user: User):
        raise (NotImplementedError)

    @abstractmethod
    def find_by_email(self, user_email):
        raise (NotImplementedError)

    # @abstractmethod
    # def update(self, user_email, user: user):
    #     raise (NotImplementedError)
