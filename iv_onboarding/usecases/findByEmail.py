import re
from domain.entities.user import User
from usecases.ports.userRepository import UserRepository

class FindByEmail: 
    def __init__(self, repository: UserRepository):
        self.repository = repository
    
    def validate_email(self, email: str) -> bool:
        # Regex simples para validação de email
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return bool(re.match(pattern, email))
    
    def execute(self, email: str) -> User:
        if not self.validate_email(email):
            raise ValueError("O email fornecido não é válido.")
        return self.repository.find_by_email(email)
