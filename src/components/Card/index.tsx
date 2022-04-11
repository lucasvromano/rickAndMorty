import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/store';
import './styles.scss';

const Card: React.FC<Character> = ({ name, gender, status, specie, image, episode }): JSX.Element => {

  const rickAndMorty = useSelector((state: RootState) => state.rickAndMorty);

  const imageCharacter = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
  url(${image})`
  }

  const setStatusCharacterColor = (status: string) => {
    if (status.toLocaleLowerCase() === 'alive') return 'card__iconStatus--alive';
    if (status.toLocaleLowerCase() === 'unknown') return 'card__iconStatus--unknown';
    return 'card__iconStatus--dead';
  }

  const formatEpisodeNumber = (episode: number) => {
    return episode <= 9 ? `0${episode}` : episode;
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
        rickAndMorty?.episodes.map(currentEpisode => (
          episode.includes(currentEpisode.url) &&
          (
            <p className="card__episode" key={currentEpisode.id}>
              Episode {formatEpisodeNumber(currentEpisode.id)}: {currentEpisode.name} ({currentEpisode.air_date})
            </p>
          )
        ))
      }
    </div>
  );
};

export default Card;
