from typing import List
from domain.entities.users import Users
from usecases.ports.userRepository import UserRepository
from confluent_kafka import Producer
import json
from sqlalchemy.orm import Session
from domain.enums.status import Status
class UserRepository(UserRepository):
    producer_config = {
        'bootstrap.servers': 'kafka:9092',  # Broker Kafka rodando localmente
        'client.id': 'iv_producer',
        "acks": "all",
        "retries": 3,
        "batch.size": 16384,
        "linger.ms": 5,
    }
    producer = Producer(producer_config)    

    def __init__(self, db_session: Session):
        self.users: List[Users] = []
        self.db_session = db_session
            
    def create(self, user: Users):
        self.db_session.add(user)
        self.db_session.commit()
        self.sendBrokerMessage(user.to_dict(), 'iv_onboarding')

    def find_by_email(self, email) -> Users:
        return self.db_session.query(Users).filter(Users.email == email).first()
    
    def find_by_id(self, id) -> Users:
        return self.db_session.query(Users).filter(Users.user_id == id).first()
    
    def find_all(self) -> List[Users]:
        return self.db_session.query(Users).filter((Users.status != Status.DEACTIVATED.value) & (Users.status != Status.DELETED.value)).all()

    
    def find_index_by_id(self, id):
        user_index = {user.id: i for i, user in enumerate(self.users)}
        result = user_index.get(id, -1)
        return result

    def update(self, id, user_data: dict):
        findedUser = self.db_session.query(Users).filter(Users.user_id == id).first()
        if findedUser:
            findedUser.name = user_data['name']
            findedUser.lastname = user_data['lastname']
            findedUser.birthdate = user_data['birthdate']
            findedUser.phone = user_data['phone']
            self.db_session.commit()
            self.db_session.refresh(findedUser)
        return findedUser
    
    def delete(self, index):
        findedUser = self.db_session.query(Users).filter(Users.user_id == index).first()
        if findedUser:
            findedUser.status = Status.DEACTIVATED.value
            self.db_session.commit()
            self.db_session.refresh(findedUser)
        return findedUser
    
    def sendBrokerMessage(self, message: any, topic: str):
        json_data = json.dumps(message)
        try:
            self.producer.produce(
                topic,
                value=json_data.encode("utf-8"),
            )
            self.producer.flush()
        except Exception as e:
            print(f"Erro: {e}")
        finally:
            self.producer.flush()
