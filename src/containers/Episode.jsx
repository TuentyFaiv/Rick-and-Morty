import React from 'react';

import CardCharacters from '@components/CardCharacters';

const Episode = (props) => {
  const { characters } = props;

  return (
    <>
      <div className="item__header">
        <h1 className="item__header-title ta-center">
          {props.name}
          <span>{`${props.episode} - ${props.air_date}`}</span>
        </h1>
      </div>
      <div className="item__content">
        <h4>Characters: </h4>
        <div className="item__content-section">
          {
            characters && characters.map((character) => (
              <CardCharacters key={character.id} {...character} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Episode;
