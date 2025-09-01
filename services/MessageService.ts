import { IMessageRepository } from '@/repositories/interfaces/IMessageRepository';
import { Message, CreateMessageDto } from '@/types/message';

export class MessageService {
  constructor(private messageRepository: IMessageRepository) {}

  async getAllMessages(): Promise<Message[]> {
    // @TODO: implement getAllMessages
    return [];
  }

  async createMessage(data: CreateMessageDto): Promise<Message> {
    // @TODO: implement createMessage
    return {} as Message;
  }
}
