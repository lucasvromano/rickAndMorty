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
                  name={index.name}
                  gender={index.gender}
                  status={index.status}
                  specie={index.species}
                  image={index.image}
                  episodes={index.episode.slice(0, 5)}
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
