import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/components/cardHome.scss';

const CardHome = (props) => (
  <article className="card">
    <Link to={`${props.type}s/${props.id}`}>
      {
        props.type === 'character' && (
          <img className="card__image" src={props.image} alt={`${props.name} | ${props.location.dimension}`}/>
        )
      }
      <h3 className="card__title">
        {props.name}
        {props.type === 'character' && <span>{`${props.gender} - ${props.species}`}</span>}
        {props.type === 'location' && <span>{props.type}</span>}
      </h3>
      {
        props.type === 'episode' && (
          <>
            <p><strong>Episode: </strong>{props.episode}</p>
            <p><strong>Air date: </strong>{props.air_date}</p>
          </>
        )
      }
      {props.type === 'location' && (
          <>
            <p><strong>Location: </strong>{props.dimension}</p>
            <p><strong>Residens: </strong>{props.residents.map((resident) => (`${resident.name}, `))}</p>
          </>
        )
      }
      {
        props.type === 'character' && (
          <>
            <p><strong>Location: </strong>{props.location.name}</p>
            <p><strong>Origin: </strong>{props.origin.dimension}</p>
            <p><strong>Status: </strong>{props.status}</p>
          </>
        )
      }
    </Link>
  </article>
);

export default CardHome;
