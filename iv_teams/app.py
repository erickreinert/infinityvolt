from confluent_kafka.admin import AdminClient, NewTopic
from confluent_kafka import Consumer, KafkaException, KafkaError
import json

KAFKA_BROKER = 'kafka:9092'
TOPIC = 'iv_onboarding'

def ensure_topic_exists():
    admin_client = AdminClient({'bootstrap.servers': KAFKA_BROKER})
    topic_metadata = admin_client.list_topics(timeout=5)
    
    if TOPIC not in topic_metadata.topics:
        print(f"Tópico '{TOPIC}' não existe. Criando...")
        new_topic = NewTopic(TOPIC, num_partitions=1, replication_factor=1)

def create_consumer():
    consumer_config = {
        'bootstrap.servers': KAFKA_BROKER,
        'group.id': 'iv_onboarding-group',
        'auto.offset.reset': 'earliest',
    }
    return Consumer(consumer_config)

# Função para processar mensagens
def consume_messages():
    consumer = create_consumer()
    consumer.subscribe([TOPIC])  # Tópico a ser consumido

    try:
        print("Aguardando mensagens do tópico 'iv_onboarding'...")
        while True:
            # Poll busca mensagens do Kafka
            message = consumer.poll(timeout=1.0)
            
            if message is None:  # Sem mensagens
                continue
            
            if message.error():  # Erro na mensagem
                if message.error().code() == KafkaError._PARTITION_EOF:
                    # Fim da partição (não é erro crítico)
                    continue
                else:
                    raise KafkaException(message.error())
            
            # Mensagem recebida com sucesso
            print(f"Mensagem recebida: {message.value().decode('utf-8')}")

            # Processar a mensagem
            user_data = json.loads(message.value().decode('utf-8'))
            process_user_data(user_data)
    
    except KeyboardInterrupt:
        print("Encerrando consumer...")
    finally:
        # Fechar o consumer
        consumer.close()

# Função para realizar ações com os dados recebidos
def process_user_data(user_data):
    message = f"Usuário Cadastro: \n\nNome={user_data['nome']}\nE-mail={user_data['email']}"
    enviar_mensagem(message)

# Iniciar o consumer
if __name__ == "__main__":
    consume_messages()
