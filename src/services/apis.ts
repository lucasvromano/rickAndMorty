
export const fetchCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
}

export const fetchEpisodes = async (episode: string) => {
  const response = await fetch(episode);
  const data = await response.json();
  return data;
}