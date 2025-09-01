import { useState } from 'react';
import { Message } from '@/types/message';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch('/api/messages');
      const data: Message[] = await response.json();
      setMessages(data);
    } catch (error) {
      alert('Error fetching messages');
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const createMessage = async (): Promise<void> => {
    const content = prompt('Enter message content:');
    if (!content) return;

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, type: 'info' })
      });
      
      if (response.ok) {
        fetchMessages(); // Refresh the list
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      alert('Error creating message');
      console.error('Create Error:', error);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>Next.js Repository Pattern Demo</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={fetchMessages}
          disabled={loading}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: loading ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginRight: '1rem'
          }}
        >
          {loading ? 'Loading...' : 'Fetch Messages'}
        </button>

        <button 
          onClick={createMessage}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Add Message
        </button>
      </div>

      <div>
        {messages.length > 0 ? (
          <div>
            <h2>Messages:</h2>
            {messages.map(message => (
              <div 
                key={message.id} 
                style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  backgroundColor: message.type === 'success' ? '#d4edda' : '#f8f9fa'
                }}
              >
                <p><strong>ID:</strong> {message.id}</p>
                <p><strong>Content:</strong> {message.content}</p>
                <p><strong>Type:</strong> {message.type}</p>
                <p><strong>Time:</strong> {new Date(message.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No messages loaded. Click "Fetch Messages" to load them.</p>
        )}
      </div>
    </div>
  );
}
