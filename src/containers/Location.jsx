import React from 'react';

import CardCharacters from '@components/CardCharacters';

const IndividualLocation = (props) => {
  const { residents } = props;

  return (
    <>
      <div className="item__header">
        <h1 className="item__header-title ta-center">
          {props.name}
          <span>{`${props.dimension}${props.type ? ` - ${props.type}` : ''}`}</span>
        </h1>
      </div>
      <div className="item__content">
        <h4>Residents: </h4>
        <div className="item__content-section">
          {
            residents && residents.map((resident) => (
              <CardCharacters key={resident.id} {...resident}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default IndividualLocation;
