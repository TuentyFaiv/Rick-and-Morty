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

  const handleFilter = (e) => {
    setVariables({
      ...variables,
      page: 0,
      filter: {
        ...variables.filter,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleDeleteFilter = (e) => {
    setVariables({
      ...variables,
      page: 0,
      filter: {
        ...variables.filter,
        [e.target.name]: '',
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
        <div className="speciesFilter">
          <p className="speciesFilter__title">Species</p>
          <label htmlFor="human">
            <input type="radio" name="species" id="human" onChange={handleFilter} value="human" />
            <p>Human</p>
          </label>
          <label htmlFor="humanoid">
            <input type="radio" name="species" id="humanoid" onChange={handleFilter} value="humanoid" />
            <p>Humanoid</p>
          </label>
          <label htmlFor="alien">
            <input type="radio" name="species" id="alien" onChange={handleFilter} value="alien" />
            <p>Alien</p>
          </label>
          <label htmlFor="animal">
            <input type="radio" name="species" id="animal" onChange={handleFilter} value="animal" />
            <p>Alien</p>
          </label>
          <label htmlFor="unknownSpecies">
            <input type="radio" name="species" id="unknownSpecies" onChange={handleFilter} value="unknown" />
            <p>Unknown</p>
          </label>
          <label htmlFor="withoutFilterSpecies">
            <input
              type="radio"
              name="species"
              id="withoutFilterSpecies"
              onChange={handleDeleteFilter}
              checked={variables.filter.species === '' ? true : false}
            />
            <p>Without filter</p>
          </label>
        </div>
        <div className="genderFilter">
          <p className="genderFilter__title">Gender</p>
          <label htmlFor="female">
            <input type="radio" name="gender" id="female" onChange={handleFilter} value="female"/>
            <p>Female</p>
          </label>
          <label htmlFor="male">
            <input type="radio" name="gender" id="male" onChange={handleFilter} value="male"/>
            <p>Male</p>
          </label>
          <label htmlFor="genderless">
            <input type="radio" name="gender" id="genderless" onChange={handleFilter} value="genderless"/>
            <p>Genderless</p>
          </label>
          <label htmlFor="unknownGender">
            <input type="radio" name="gender" id="unknownGender" onChange={handleFilter} value="unknown"/>
            <p>Unknown</p>
          </label>
          <label htmlFor="withoutFilterGender">
            <input
              type="radio"
              name="gender"
              id="withoutFilterGender"
              onChange={handleDeleteFilter}
              checked={variables.filter.gender === '' ? true : false}
            />
            <p>Without filter</p>
          </label>
        </div>
        <div className="statusFilter">
          <p className="statusFilter__title">Status</p>
          <label htmlFor="alive">
            <input type="radio" name="status" id="alive" onChange={handleFilter} value="alive"/>
            <p>Alive</p>
          </label>
          <label htmlFor="dead">
            <input type="radio" name="status" id="dead" onChange={handleFilter} value="dead"/>
            <p>Dead</p>
          </label>
          <label htmlFor="unknownStatus">
            <input type="radio" name="status" id="unknownStatus" onChange={handleFilter} value="unknown"/>
            <p>Unknown</p>
          </label>
          <label htmlFor="withoutFilterStatus">
            <input
              type="radio"
              name="status"
              id="withoutFilterStatus"
              onChange={handleDeleteFilter}
              checked={variables.filter.status === '' ? true : false}
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
