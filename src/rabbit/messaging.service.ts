import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagingService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public async publish(message: string) {
    this.amqpConnection.publish("henrique", "123", message);
  }
}
