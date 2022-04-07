import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../../services/apis';
import { updateEpisodes } from '../../store/reducers/reducer';
import { RootState } from '../../utils/store';
import './styles.scss';

interface Character {
  name: string;
  gender: string;
  status: string;
  specie: string;
  image: string;
  episodes: string[];
}

interface Episode {
  id: number,
  name: string,
  air_date: string,
  url: string[]
}

const Card: React.FC<Character> = ({ name, gender, status, specie, image, episodes }): JSX.Element => {

  const dispatch = useDispatch();
  const rickAndMorty = useSelector((state: RootState) => state.rickAndMorty);

  const imageCharacter = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
  url(${image})`
  }

  const setStatusCharacterColor = (status: string) => {
    if (status.toLocaleLowerCase() === 'alive') return 'card__iconStatus--alive';
    if (status.toLocaleLowerCase() === 'unknown') return 'card__iconStatus--unknown';
    if (status.toLocaleLowerCase() === 'dead') return 'card__iconStatus--dead';
  }

  return (
    <div className="card" style={imageCharacter}>
      <div className="card__containerHead">
        <div className="card__containerName">
          <h2 className="card__name">
            {name}
          </h2>
          <span className="card__gender">
            {gender}
          </span>
        </div>

        <div>
          <div className="card__containerSpecie">
            <span className={`card__iconStatus card__iconStatus--alive ${setStatusCharacterColor(status)}`}></span>
            <span className="card__specie">{specie}</span>
          </div>
        </div>
      </div>

      <h3 className="card__firstFiveApparences">
        First 5: appearances:
      </h3>


      {
        episodes?.map(index => {

          // const episode = await fetchEpisodes(index);

          return (
            <p className="card__episode" key={index}>{index}</p>
          )
        })
      }




    </div>
  );
};

export default Card;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
