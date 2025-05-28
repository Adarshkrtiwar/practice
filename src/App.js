import React, { useState ,useEffect} from 'react';
import SearchBar from './Components/SearchBar';
import UserCard from './Components/UserCard';
import Repo from './Components/Repo';
import { fetchGitHubUser, fetchTopRepos } from './services/github';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [repos, setRepos] = useState([]);

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Apply theme class to body (or root div)
    document.body.className = theme;

    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);
 const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUser(null);
    setRepos([]);
    try {
      const userData = await fetchGitHubUser(username);
      const repoData = await fetchTopRepos(username);
      setUser(userData);
      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <h1>GitStalker 🔍</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <UserCard user={user} />}
      {repos.length > 0 && <Repo repos={repos} />}
    </div>
  );
}

export default App;
