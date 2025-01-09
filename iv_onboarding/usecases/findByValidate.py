from domain.entities.user import User
from usecases.ports.userRepository import UserRepository
from uuid import uuid4 as uuid
from flask import abort
from email_validator import validate_email, EmailNotValidError
from datetime import datetime

class FindByValidate: 
  
    def __init__(self, user: dict):
        self.user = user  # Armazena os dados do usuário para validação

    def validate(self):
        # Valida se todos os campos obrigatórios estão presentes
        required_fields = ["name", "lastname", "birthdate", "phone", "email"]
        for field in required_fields:
            if not self.user.get(field):
                raise ValueError(f"O campo '{field}' é obrigatório.")
        
        # Valida o formato do email
        try:
            validate_email(self.user["email"])
        except EmailNotValidError as e:
            raise ValueError(f"Email inválido: {str(e)}")
        
        # Valida a data de nascimento
        try:
            datetime.strptime(self.user["birthdate"], "%d-%m-%Y")  # Exemplo: "2001-01-01"
        except ValueError:
            raise ValueError("Data de nascimento inválida. Use o formato 'DD-MM-YYYY'.")
        
        # Valida o telefone (exemplo simples)
        if not self.user["phone"].isdigit() or len(self.user["phone"]) < 10:
            raise ValueError("Número de telefone inválido. Deve conter pelo menos 10 dígitos.")

