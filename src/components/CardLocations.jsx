import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/components/cardLocations.scss';

const CardLocations = (props) => (
  <article className="cardLocations">
    <Link to={`/locations/${props.id}`}>
      <h2 className="cardCharacter__title">
        {props.name}
        <span>{`${props.type}`}</span>
      </h2>
      <p><strong>Location: </strong>{props.dimension}</p>
      <p><strong>Residents: </strong>{props.residents.map(({ name }) => (`${name}, `))}</p>
    </Link>
  </article>
);

export default CardLocations;
