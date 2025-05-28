import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Search</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '250px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#24292e',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  }
};

export default SearchBar;
