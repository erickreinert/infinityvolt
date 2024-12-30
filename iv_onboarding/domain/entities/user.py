from datetime import date

class User: 
    def __init__(self, id, name, lastname, birthdate, phone, email, status):
        self.id = id
        self.name = name
        self.lastname = lastname
        self.birthdate = birthdate
        self.phone = phone
        self.email = email
        self.register = date.today()
        self.status = status

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.name, 
            "email": self.email,
            "nascimento": self.birthdate,
            "telefone": self.phone,
            "status": self.status,
            "dataRegistro": self.register
        }
    
    