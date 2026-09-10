import React from 'react';

function UserCard({ user }) {
  return (
    <div style={{
      border: '1px solid #444',
      borderRadius: '10px',
      padding: '16px',
      margin: '12px',
      width: '260px',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      textAlign: 'left'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#61dafb' }}>{user.name}</h3>
      <p style={{ margin: '4px 0', fontSize: '0.9rem' }}><strong>Email:</strong> {user.email}</p>
      <p style={{ margin: '4px 0', fontSize: '0.9rem' }}><strong>Company:</strong> {user.company?.name}</p>
      <p style={{ margin: '4px 0', fontSize: '0.9rem' }}><strong>Website:</strong> {user.website}</p>
    </div>
  );
}

export default UserCard;