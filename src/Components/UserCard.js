import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div style={styles.card}>
      <img src={user.avatar_url} alt="avatar" style={styles.avatar} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p><strong>Location:</strong> {user.location || 'N/A'}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '30px',
    width: '400px',
    marginInline: 'auto',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '10px',
  }
};

export default UserCard;
