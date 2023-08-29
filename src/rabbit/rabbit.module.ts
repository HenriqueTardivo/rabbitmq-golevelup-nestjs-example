import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Module } from "@nestjs/common";
import { MessagingService } from "./messaging.service";

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: "exchange1",
          type: "topic",
          createExchangeIfNotExists: true,
        },
        {
          name: "henrique",
          type: "topic",
          createExchangeIfNotExists: true,
        },
      ],
      uri: "amqp://guest:guest@localhost:5672",
      enableControllerDiscovery: true,
    }),
    RabbitExampleModule,
  ],
  providers: [MessagingService],
  exports: [MessagingService],
})
export class RabbitExampleModule {}
