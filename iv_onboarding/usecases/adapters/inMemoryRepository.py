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
    
    def find_index_by_id(self, id):
        user_index = {user.id: i for i, user in enumerate(self.users)}
        result = user_index.get(id, -1)
        return result

    def update(self, index, user: User):
         # Acessando os atributos diretamente como objetos
        print(f"Atualizando o usuário com índice {index}: {user['name']}")
        # # Atualizando os valores do usuário no índice indicado
        self.users[index].name = user['name']
        self.users[index].email = user['email']
        self.users[index].birthdate = user['birthdate']
        self.users[index].lastname = user['lastname']
        self.users[index].phone = user['phone']
        # # Verificando a atualização
        # print(f"Novo nome: {self.users[index].name}")
        return user
