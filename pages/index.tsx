import { useState } from 'react';

interface ApiResponse {
  message: string;
  timestamp: string;
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data: ApiResponse = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Error fetching data');
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>Minimal Next.js TypeScript App</h1>
      <p>Click the button to test the API endpoint</p>
      <button
        onClick={handleClick}
        disabled={loading}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: loading ? '#ccc' : '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? 'Loading...' : 'Call API'}
      </button>
    </div>
  );
}
