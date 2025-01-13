from typing import List
from domain.entities.user import User
from usecases.ports.userRepository import UserRepository
from confluent_kafka import Producer
import json

class InMemoryUserRepository(UserRepository):
    producer_config = {
        'bootstrap.servers': 'kafka:9092',  # Broker Kafka rodando localmente
        'client.id': 'iv_producer',
        "acks": "all",
        "retries": 3,
        "batch.size": 16384,
        "linger.ms": 5,
    }
    producer = Producer(producer_config)    

    def __init__(self):
        self.users: List[User] = []
            
    def create(self, user: User):
        self.users.append(user)
        self.sendBrokerMessage(user.to_dict(), 'iv_onboarding')

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
        print(f"Atualizando o usuário com índice {index}: {user['name']}")
        self.users[index].name = user['name']
        self.users[index].email = user['email']
        self.users[index].birthdate = user['birthdate']
        self.users[index].lastname = user['lastname']
        self.users[index].phone = user['phone']
        return user
    
    def sendBrokerMessage(self, message: any, topic: str):
        json_data = json.dumps(message)
        try:
            self.producer.produce(
                topic,   # Nome do tópico
                value=json_data.encode("utf-8"), # Valor da mensagem
            )
            self.producer.flush()  # Aguarda a entrega da mensagem
        except Exception as e:
            print(f"Erro: {e}")
        finally:
            self.producer.flush()
