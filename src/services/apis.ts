interface Episode {
  id: number,
  name: string,
  air_date: string,
  url: string
}

export const fetchCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
}

export const fetchEpisodes = async (episode: string) => {
  const response = await fetch(episode);
  const data: Episode = await response.json();
  return data;
}

export const fetchEpisodesById = async (id: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data: Episode = await response.json();
  return data;
}