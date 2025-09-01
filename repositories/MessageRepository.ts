import { IMessageRepository } from './interfaces/IMessageRepository';
import { Message, CreateMessageDto } from '@/types/message';

export class MessageRepository implements IMessageRepository {
  private messages: Message[] = [
    {
      id: '1',
      content: 'Hello from repository pattern!',
      timestamp: new Date().toISOString(),
      type: 'info'
    },
    {
      id: '2',
      content: 'This is a sample message',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      type: 'success'
    }
  ];

  async findAll(): Promise<Message[]> {
    // @TODO: implement findAll
    return [];
  }

  async create(data: CreateMessageDto): Promise<Message> {
    // @TODO: implement Create
    return {} as Message;
  }
}
