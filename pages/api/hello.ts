import type { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  message: string;
  timestamp: string;
}

interface ErrorResponse {
  error: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | ErrorResponse>
) {
  if (req.method === 'GET') {
    res.status(200).json({ 
      message: 'Hello from Next.js TypeScript API!',
      timestamp: new Date().toISOString()
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}
