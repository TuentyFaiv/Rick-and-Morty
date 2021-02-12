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
      page: 0,
      filter: {
        ...variables.filter,
        name: searchRef.current.value,
      },
    });
  };

  const handleSearchByGender = (e) => {
    setVariables({
      ...variables,
      page: 0,
      filter: {
        ...variables.filter,
        gender: e.target.value,
      },
    });
  };

  const handleDeleteGenderFilter = () => {
    setVariables({
      ...variables,
      page: 0,
      filter: {
        ...variables.filter,
        gender: '',
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
        <div className="genderFilter">
          <p className="genderFilter__title">Gender</p>
          <label htmlFor="female">
            <input type="radio" name="gender" id="female" onChange={handleSearchByGender} value="female"/>
            <p>Female</p>
          </label>
          <label htmlFor="male">
            <input type="radio" name="gender" id="male" onChange={handleSearchByGender} value="male"/>
            <p>Male</p>
          </label>
          <label htmlFor="genderless">
            <input type="radio" name="gender" id="genderless" onChange={handleSearchByGender} value="genderless"/>
            <p>Genderless</p>
          </label>
          <label htmlFor="unknown">
            <input type="radio" name="gender" id="unknown" onChange={handleSearchByGender} value="unknown"/>
            <p>Unknown</p>
          </label>
          <label htmlFor="withoutFilter">
            <input
              type="radio"
              name="gender"
              id="withoutFilter"
              onChange={handleDeleteGenderFilter}
              checked={variables.filter.gender === '' ? true : false}
            />
            <p>Without filter</p>
          </label>
        </div>
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
