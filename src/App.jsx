import { useState, useEffect } from 'react';
import UserCard from './UserCard';
import './App.css';

function App() {
  // Task 1: Setup State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Task 2: Fetch Data from JSONPlaceholder API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users data');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty array ensures it runs once when component mounts

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>User Directory</h1>

      {/* Task 3: Handle Loading, Error, and Map UI */}
      {loading && <h2>Loading users...</h2>}

      {error && <h2 style={{ color: '#ff6b6b' }}>Error: {error}</h2>}

      {!loading && !error && (
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '10px' 
        }}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;