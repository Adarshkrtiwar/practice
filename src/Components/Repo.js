import React from 'react';

const RepoList = ({ repos }) => {
  if (!repos.length) return null;

  return (
    <div style={styles.container}>
      <h3>⭐ Top Repositories</h3>
      {repos.map((repo) => (
        <div key={repo.id} style={styles.repo}>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <h4>{repo.name}</h4>
          </a>
          <p>{repo.description}</p>
          <p>🌟 {repo.stargazers_count} | 🧠 {repo.language || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '30px',
    maxWidth: '600px',
    marginInline: 'auto',
  },
  repo: {
    background: '#f9f9f9',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    textAlign: 'left',
  }
};

export default RepoList;
