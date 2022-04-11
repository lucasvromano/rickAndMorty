import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { updateCharacters, updateEpisodes } from "../store/reducers/reducer";
import { fetchCharacters } from "../services/fetchCharacters";
import { fetchEpisodes } from "../services/fetchEpisodes";
import Card from "../components/Card";

import "./styles.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const rickAndMorty = useSelector((state: RootState) => state.rickAndMorty);

  useEffect(() => {
    const getCharacters = async () => {
      const characters = await fetchCharacters();
      dispatch(updateCharacters(characters));
      getEpisodes(characters);
    }

    const getEpisodes = (characters: any[]) => {
      const episodesList: string[] = [""];

      characters.forEach(character => {
        const firstFiveAppearances = character.episode.slice(0, 5);

        firstFiveAppearances.forEach((episode: string) => {
          !episodesList.includes(episode) && episodesList.push(episode)
        });
      });

      episodesList.map(async (index: string) => {
        const episode = await fetchEpisodes(index);
        dispatch(updateEpisodes(episode));
      });

    }

    getCharacters();

  }, [dispatch]);

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
                  species={index.species}
                  image={index.image}
                  episode={index.episode.slice(0, 5)}
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
