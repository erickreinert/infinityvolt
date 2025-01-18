from confluent_kafka import Consumer, KafkaException, KafkaError
from messenger import enviar_mensagem
import json

def create_consumer():
    consumer_config = {
        'bootstrap.servers': 'kafka:9092',
        'group.id': 'iv_onboarding-group',
        'auto.offset.reset': 'earliest',
    }
    return Consumer(consumer_config)

# Função para processar mensagens
def consume_messages():
    consumer = create_consumer()
    consumer.subscribe(['iv_onboarding'])  # Tópico a ser consumido

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
