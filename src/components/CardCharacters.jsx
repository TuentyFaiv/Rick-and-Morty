import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/components/cardCharacters.scss';

const CardCharacters = (props) => (
  <article className="cardCharacter">
    <Link to={`/characters/${props.id}`}>
      <img className="cardCharacter__image" src={props.image} alt={`${props.name} | ${props.location.dimension}`}/>
      <h2 className="cardCharacter__title">
        {props.name}
        <span>{`${props.gender} - ${props.species}${props.type ? ` - ${props.type}` : ''}`}</span>
      </h2>
      <p><strong>Location: </strong>{props.location.name}</p>
      <p><strong>Origin: </strong>{props.origin.dimension}</p>
      <p><strong>Status: </strong>{props.status}</p>
    </Link>
  </article>
);

export default CardCharacters;
