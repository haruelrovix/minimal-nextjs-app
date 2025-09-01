export interface Message {
  id: string;
  content: string;
  timestamp: string;
  type: 'info' | 'success' | 'error';
}

export interface CreateMessageDto {
  content: string;
  type?: 'info' | 'success' | 'error';
}
