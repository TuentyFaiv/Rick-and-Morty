import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/components/cardEpisodes.scss';

const CardEpisodes = (props) => (
  <article className="cardEpisodes">
    <Link to={`/episodes/${props.id}`}>
      <h2 className="cardCharacter__title">
        {props.name}
        <span>{props.episode}</span>
      </h2>
      <p><strong>Air date: </strong>{props.air_date}</p>
      <p><strong>Characters: </strong>{props.characters.map(({ name }) => (`${name}, `))}</p>
    </Link>
  </article>
);

export default CardEpisodes;
