import React, { useState, useEffect, useRef } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CHARACTERS } from '@queries';

import '@styles/pages/characters.scss';
import CardCharacters from '@components/CardCharacters';

const Characters = () => {
  const [query, { loading, data, error }] = useLazyQuery(CHARACTERS);
  const [variables, setVariables] = useState({
    page: 1,
    filter: { name: '', status: '', species: '', type: '', gender: '' },
  });
  const searchRef = useRef(null);

  const prev = data?.characters.info?.prev;
  const prevPage = prev === null ? '' : prev === undefined ? 'Loading...' : prev;
  const next = data?.characters.info?.next;
  const nextPage = next === null ? '' : next === undefined ? 'Loading...' : next;

  const handlePrev = () => {
    setVariables({
      ...variables,
      page: data?.characters.info?.prev,
    });
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setVariables({
      ...variables,
      page: data?.characters.info?.next,
    });
    window.scrollTo(0, 0);
  };

  const handleSearchByName = () => {
    setVariables({
      ...variables,
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
    <section className="characters">
      <div className="characters__header">
        <h1 className="characters__header-title">
          {
            `Total characters: ${!loading ? data?.characters.info?.count : !error ? 'loading...' : ''} 
            | Pages: ${!loading ? data?.characters.info?.pages : !error ? 'loading...' : ''}`
          }
        </h1>
        <input
          ref={searchRef}
          type="text"
          className="characters__header-search"
          placeholder="Search by name"
          value={variables.filter.name}
          onChange={handleSearchByName}
        />
        <div className="characters__prevandnext">
          <button type="button" onClick={handlePrev} disabled={data?.characters.info?.prev ? false : true}>
            {`Prev page ${prevPage}`}
          </button>
          <button type="button" onClick={handleNext} disabled={data?.characters.info?.next ? false : true}>
            {`Next page ${nextPage}`}
          </button>
        </div>
      </div>
      <div className="characters__content">
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {
          data?.characters.results?.map((character) => (
            <CardCharacters key={character.id} {...character} />
          ))
        }
      </div>
      <div className="characters__prevandnext">
        <button type="button" onClick={handlePrev} disabled={data?.characters.info?.prev ? false : true}>
          {`Prev page ${prevPage}`}
        </button>
        <button type="button" onClick={handleNext} disabled={data?.characters.info?.next ? false : true}>
          {`Next page ${nextPage}`}
        </button>
      </div>
    </section>
  );
};

export default Characters;
