export const fetchTopRepos = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  if (!res.ok) throw new Error('Repo fetch failed');

  const repos = await res.json();

  // Sort repos by stargazers count
  return repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);
};
// src/services/githubAPI.js

export const fetchGitHubUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error('User not found');
  }

  const data = await response.json();
  return data;
};
