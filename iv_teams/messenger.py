import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

url = os.getenv("TEAMS_WEBHOOK_URL")

if not url:
    raise ValueError("A variável de ambiente TEAMS_WEBHOOK_URL não foi definida!")

def enviar_mensagem(mensagem):
    message = {
        "type": "message",
        "attachments": [
            {
                "contentType": mensagem,
                "content": {
                    "type": "AdaptiveCard",
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "version": "1.4",
                    "body": [
                        {
                            "type": "TextBlock",
                            "text": "Título da Mensagem",
                        }
                    ]
                }
            }
        ]
    }

    sdata = json.dumps(message)

    response = requests.post(url, sdata, headers={"Content-Type": "application/json"})

    if (response.status_code == 202):
        print("Mensagem enviada!")
    else:
        print("Erro ao enviar mensagem")

# if response.status_code == 200:
#     print("Mensagem enviada com sucesso!")
# else:
#     print(f"Falha ao enviar mensagem. Status code: {response.status_code}, Resposta: {response.text}")
