import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { updateCharacters, updateEpisodes } from "../store/reducers/reducer";
import { fetchCharacters, fetchEpisodes } from "../services/apis";
import Card from "../components/Card";

import "./styles.scss";

interface Character {
  episode: Array<string>,
  gender: string,
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
}

interface Episode {
  id: number,
  name: string,
  air_date: string,
  url: string
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const rickAndMorty = useSelector((state: RootState) => state.rickAndMorty);

  useEffect(() => {

    const getCharacters = async () => {
      const characters = await fetchCharacters();
      dispatch(updateCharacters(characters));
      getEpisodes(characters);
    }

    getCharacters();

  }, [dispatch]);


  const getEpisodes = (characters: any[]) => {

    const episodesList: string[] = [""];

    characters.map(character => {
      const firstFiveAppearances = character.episode.slice(0, 5);

      firstFiveAppearances.map(async (episode: string) => {
        !episodesList.includes(episode) && episodesList.push(episode) 
      });
    });

    console.log(episodesList);

    episodesList.map(async index => {
      const characters = await fetchEpisodes(index);
      dispatch(updateEpisodes(characters));
    });

  }

  return (
    <>
      <div className="characters">
        {
          rickAndMorty?.characters.map(index => {
            return (
              <div key={index.id} className="characters__cards">
                <Card
                  id={index.id}
                  name={index.name}
                  gender={index.gender}
                  status={index.status}
                  specie={index.species}
                  image={index.image}
                  episodes={index.episode.slice(0, 5)}
                // episodes={teste}
                />
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default App;
