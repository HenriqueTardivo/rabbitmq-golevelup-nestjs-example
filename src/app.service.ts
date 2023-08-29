import { Injectable } from "@nestjs/common";
import { MessagingService } from "./rabbit/messaging.service";

@Injectable()
export class AppService {
  constructor(private readonly messageService: MessagingService) {}

  getHello(message: string): string {
    this.messageService.publish(message);

    return "Hello World!";
  }
}
