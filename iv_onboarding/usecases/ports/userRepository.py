from abc import ABC, abstractmethod
from domain.entities.users import Users

class UserRepository(ABC):
    @abstractmethod
    def create(self, user: Users):
        raise (NotImplementedError)

    @abstractmethod
    def find_by_email(self, user_email):
        raise (NotImplementedError)
    
    @abstractmethod
    def find_by_id(self, id):
        raise (NotImplementedError)
    
    @abstractmethod
    def find_all(self):
        raise (NotImplementedError)

    @abstractmethod
    def update(self, index, user: Users) -> Users:
        raise (NotImplementedError)
    
    @abstractmethod
    def delete(self, index) -> Users:
        raise (NotImplementedError)
