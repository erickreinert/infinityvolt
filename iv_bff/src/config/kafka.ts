import { Kafka, Producer } from "kafkajs";

type MessagePayload = { key?: string; value: string };

class KafkaConfig {
  private kafka: Kafka;
  private producer: Producer;

  constructor() {
    this.kafka = new Kafka({
        clientId: "my-app",
        brokers: ['broker:9093'],
    });
    this.producer = this.kafka.producer();
  }

  async produce(topic: string, messages: MessagePayload[]): Promise<void> {
    try {
      await this.producer.connect();
      await this.producer.send({
        topic: topic,
        messages: messages.map((msg) => ({
          key: msg.key,
          value: msg.value,
        })),
      });
      console.log("Mensagem enviada")
    } catch (error) {
      console.error("Error producing message:", error);
    } finally {
      await this.producer.disconnect();
    }
  }

}

export default KafkaConfig;
