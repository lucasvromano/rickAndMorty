interface Character {
  id: number,
  name: string;
  gender: string;
  status: string;
  specie: string;
  image: string;
  episode: string[];
}

interface Episode {
  id: number,
  name: string,
  air_date: string,
  url: string
}
