from datetime import date

class User: 
    def __init__(self, id, Marca, Modelo, Ano, Autonomia, status):
        self.id = id
        self.Marca = Marca
        self.Modelo = Modelo
        self.Ano = Ano
        self.Autonomia = Autonomia
        self.register = date.today()
        self.status = status

    def to_dict(self):
        return {
            "id": self.id,
            "Marca": self.Marca, 
            "Modelo": self.Modelo,
            "Ano": self.Ano,
            "Autonomia": self.Autonomia,
            "status": self.status,
            "dataRegistro": self.register
        }
    
    