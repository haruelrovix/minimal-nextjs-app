import { MessageRepository } from '@/repositories/MessageRepository';
import { MessageService } from '@/services/MessageService';

class Container {
  private messageRepository: MessageRepository;
  private messageService: MessageService;

  constructor() {
    this.messageRepository = new MessageRepository();
    this.messageService = new MessageService(this.messageRepository);
  }

  getMessageService(): MessageService {
    return this.messageService;
  }
}

export const container = new Container();
