from abc import ABC, abstractmethod
from domain.entities.user import User

class UserRepository(ABC):
    @abstractmethod
    def create(self, user: User):
        raise (NotImplementedError)

    
    @abstractmethod
    def find_all(self):
        raise (NotImplementedError)

    # @abstractmethod
    # def update(self, user_id, user: User):
    #     raise NotImplementedError