import type { NextApiRequest, NextApiResponse } from 'next';
import { container } from '@/lib/container';
import { Message, CreateMessageDto } from '@/types/message';

interface ErrorResponse {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message[] | Message | ErrorResponse>
) {
  const messageService = container.getMessageService();

  try {
    if (req.method === 'GET') {
      const messages = await messageService.getAllMessages();
      res.status(200).json(messages);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    res.status(400).json({ error: errorMessage });
  }
}
