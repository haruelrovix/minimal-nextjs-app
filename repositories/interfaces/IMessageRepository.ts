import { Message, CreateMessageDto } from '@/types/message';

export interface IMessageRepository {
  findAll(): Promise<Message[]>;
  create(data: CreateMessageDto): Promise<Message>;
}
