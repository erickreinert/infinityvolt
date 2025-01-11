from domain.validators.email import Email
from domain.validators.dateFormat import DateFormat
from domain.validators.phoneFormat import PhoneFormat
from typing import List
class Validator:
    @staticmethod
    def validate(user: dict) -> List[str]:
        errorList = []
        isValidPhone: bool = PhoneFormat.validate(user)
        isValidDate: bool = DateFormat.validate(user)
        isValidEmail: bool= Email.validate(user.get("email", None))
        
        if not isValidPhone:
            errorList.append("Número de telefone inválido. Deve conter pelo menos 10 dígitos.")
        
        if not isValidDate:
            errorList.append("Data de nascimento inválida. Use o formato 'DD-MM-YYYY'.")
        
        if not isValidEmail:
            errorList.append("Email Inválido")
    
        return errorList
        