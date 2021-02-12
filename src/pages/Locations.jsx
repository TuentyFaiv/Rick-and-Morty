import React, { useState, useEffect, useRef } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LOCATIONS } from '@queries';

import '@styles/pages/locations.scss';
import CardLocations from '@components/CardLocations';

const Locations = () => {
  const [query, { loading, data, error }] = useLazyQuery(LOCATIONS);
  const [variables, setVariables] = useState({
    page: 1,
    filter: { name: '', type: '', dimension: '' },
  });
  const searchRef = useRef(null);

  const prev = data?.locations.info?.prev;
  const prevPage = prev === null ? '' : prev === undefined ? 'Loading...' : prev;
  const next = data?.locations.info?.next;
  const nextPage = next === null ? '' : next === undefined ? 'Loading...' : next;

  const handlePrev = () => {
    setVariables({
      ...variables,
      page: data?.locations.info?.prev,
    });
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setVariables({
      ...variables,
      page: data?.locations.info?.next,
    });
    window.scrollTo(0, 0);
  };

  const handleSearchByName = () => {
    setVariables({
      ...variables,
      page: 0,
      filter: {
        ...variables.filter,
        name: searchRef.current.value,
      },
    });
  };

  useEffect(() => {
    query({ variables });
  }, [variables]);

  return (
    <section className="locations">
      <div className="locations__header">
        <h1 className="locations__header-title">
          {
            `Total locations: ${!loading ? data?.locations.info?.count : !error ? 'loading...' : ''} 
            | Pages: ${!loading ? data?.locations.info?.pages : !error ? 'loading...' : ''}`
          }
        </h1>
        <input
          ref={searchRef}
          type="text"
          className="locations__header-search"
          placeholder="Search by name"
          value={variables.filter.name}
          onChange={handleSearchByName}
        />
        <div className="locations__prevandnext">
          <button type="button" onClick={handlePrev} disabled={data?.locations.info?.prev ? false : true}>
            {`Prev page ${prevPage}`}
          </button>
          <button type="button" onClick={handleNext} disabled={data?.locations.info?.next ? false : true}>
            {`Next page ${nextPage}`}
          </button>
        </div>
      </div>
      <div className="locations__content">
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {
          data?.locations.results?.map((location) => (
            <CardLocations key={location.id} {...location} />
          ))
        }
      </div>
      <div className="locations__prevandnext">
        <button type="button" onClick={handlePrev} disabled={data?.locations.info?.prev ? false : true}>
          {`Prev page ${prevPage}`}
        </button>
        <button type="button" onClick={handleNext} disabled={data?.locations.info?.next ? false : true}>
          {`Next page ${nextPage}`}
        </button>
      </div>
    </section>
  );
};

export default Locations;
