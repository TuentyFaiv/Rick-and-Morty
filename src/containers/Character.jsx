import React from 'react';
import { Link } from 'react-router-dom';

import CardEpisodes from '@components/CardEpisodes';

const Character = (props) => {
  const { origin, location, episodes } = props;

  return (
    <>
      <div className="item__header">
        <img className="item__header-image" src={props.image} alt={`${props.name} | ${location?.dimension}`} />
        <div className="item__header-content">
          <h1 className="item__header-title">
            {props.name}
            <span>{`${props.gender} - ${props.species}${props.type ? ` - ${props.type}` : ''}`}</span>
            <span>{props.status}</span>
          </h1>
          <div className="item__header-item">
            <h2>Origin:</h2>
            <article>
              <Link to={`/locations/${origin?.id}`}>
                <h3>
                  {origin?.name}
                  <span>{origin?.type}</span>
                </h3>
                <p>{origin?.dimension}</p>
              </Link>
            </article>
          </div>
          <div className="item__header-item">
            <h2>Location:</h2>
            <article>
              <Link to={`/locations/${location?.id}`}>
                <h3>
                  {location?.name}
                  <span>{location?.type}</span>
                </h3>
                <p>{location?.dimension}</p>
              </Link>
            </article>
          </div>
        </div>
      </div>
      <div className="item__content">
        <h4>Episodes: </h4>
        <div className="item__content-section">
          {
            episodes && episodes.map((episode) => (
              <CardEpisodes key={episode.id} {...episode}/>
            ))
          }
        </div>
      </div>
    </>    
  );
};

export default Character;
