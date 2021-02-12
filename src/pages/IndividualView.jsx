import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CHARACTER, LOCATION, EPISODE } from '@queries';

import '@styles/pages/individualView.scss';

import Character from '@containers/Character';

const IndividualView = ({ match: { params: { id }, path } }) => {
  const [queryState, setQueryState] = useState(CHARACTER);
  const [query, { loading, data, error }] = useLazyQuery(queryState);

  useEffect(() => {
    switch (path) {
      case '/characters/:id/':
        setQueryState(CHARACTER);
        break;
      case '/locations/:id/':
        setQueryState(LOCATION);
        break;
      case '/episodes/:id/':
        setQueryState(EPISODE);
        break;
    }
    query({ variables: { id } });
  }, [path, id, queryState]);

  return (
    <section className="individualPage">
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {
        (path === '/characters/:id/' && data) && <Character {...data.item} />
      }
    </section>
  );
};

export default IndividualView;
