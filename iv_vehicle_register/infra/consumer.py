import json
import os
from threading import Thread
from confluent_kafka import Consumer, KafkaError
from models.db import db
from domain.entities.veichle import Vehicles
from sqlalchemy.exc import SQLAlchemyError
from domain.enums.status import Status

def consume_messages(app):
    with app.app.app_context():
        consumer_config = {
            'bootstrap.servers': 'kafka:9092',
            'group.id': 'vehicle-consumer-group',
            'auto.offset.reset': 'earliest',
        }

        consumer = Consumer(consumer_config)
        consumer.subscribe(['iv_onboarding'])

        try:
            print("Iniciando o consumo de mensagens...")
            while True:
                msg = consumer.poll(1.0)
                if msg is None:
                    continue 
                if msg.error():
                    if msg.error().code() == KafkaError._PARTITION_EOF:
                        continue
                    else:
                        print(f"Erro: {msg.error()}")
                        continue

                process_message(msg.value())

        except Exception as e:
            print(f"Erro ao consumir mensagem: {e}")
        finally:
            consumer.close()

def process_message(message: bytes):
    try:
        data = json.loads(message.decode('utf-8'))
        correlation_id = data.get('correlation_id')
        user_id = data.get('user_id')

        print(f"Processando a mensagem: {data}")
        vehicle = db.session.query(Vehicles).filter(Vehicles.correlation_id == correlation_id).first()

        if vehicle:
            vehicle.owner_id = user_id  
            vehicle.status = Status.ACTIVE.value
            db.session.commit() 
            print(f"Veículo {correlation_id} atualizado com o ID do usuário {user_id}")
        else:
            print(f"Veículo {correlation_id} não encontrado")

    except SQLAlchemyError as e:
        db.session.rollback()
        print(f"Erro ao atualizar o banco de dados: {e}")
    except Exception as e:
        print(f"Erro no processamento da mensagem: {e}")

def start_consumer(app):
    with app.app.app_context(): 
        consumer_thread = Thread(target=consume_messages,args=(app,), daemon=True)
        consumer_thread.start()
