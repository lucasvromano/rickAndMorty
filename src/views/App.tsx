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

  const [episodesList, setEpisodesList] = useState<any[]>([]);
  const [episodesList2, setEpisodesList2] = useState<any[]>([]);
  // const [url, setUrl] = useState<any[]>([]);

  useEffect(() => {

    const getCharacters = async () => {
      const characters = await fetchCharacters();
      dispatch(updateCharacters(characters));
      getEpisodes(characters);
    }

    getCharacters();

  }, [dispatch]);


  const getEpisodes = (characters: any[]) => {

    const array: string[] = [""];

    characters.map(character => {
      const top5 = character.episode.slice(0, 5);
      top5.map(async (episode: string) => {

        if (!array.includes(episode)) {
          // const characters = await fetchEpisodes(episode);
          // dispatch(updateEpisodes(episode));
          // console.log(episode);
          // console.log(characters);
          array.push(episode);
        }

      });

    });

    // setUrl(array);
    console.log(array);

    array.map(async index => {
      const characters = await fetchEpisodes(index);
      dispatch(updateEpisodes(characters));
    });


    // const array: any[] = [];

    // episode.map(async index => {
    //   const ep = await fetchEpisodes(index);
    //   array.push(ep);
    // });

    // return array;
  }


  return (
    <>
      <div className="characters">

        {
          rickAndMorty?.characters.map(index => {



            console.log(rickAndMorty?.episodes);

            // const teste = getEpisodes(index.episode.slice(0, 5));
            // const teste2 = getEpisodesNew(index.episode.slice(0, 5));

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
