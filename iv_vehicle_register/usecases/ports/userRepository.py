from abc import ABC, abstractmethod
from domain.entities.vehicle import Vehicle

class UserRepository(ABC):
    @abstractmethod
    def create(self, user: Vehicle):
        raise (NotImplementedError)

    
    @abstractmethod
    def find_all(self):
        raise (NotImplementedError)

    # @abstractmethod
    # def update(self, user_id, user: User):
    #     raise NotImplementedError