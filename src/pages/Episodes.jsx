import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { EPISODES } from '@queries';

import '@styles/pages/episodes.scss';
import CardEpisodes from '@components/CardEpisodes';

const Episodes = () => {
  const [query, { loading, data, error }] = useLazyQuery(EPISODES);
  const [variables, setVariables] = useState({
    page: 1,
    filter: { name: '', episode: '' },
  });

  const prev = data?.episodes.info?.prev;
  const prevPage = prev === null ? '' : prev === undefined ? 'Loading...' : prev;
  const next = data?.episodes.info?.next;
  const nextPage = next === null ? '' : next === undefined ? 'Loading...' : next;

  const handlePrev = () => {
    setVariables({
      ...variables,
      page: data?.episodes.info?.prev,
    });
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setVariables({
      ...variables,
      page: data?.episodes.info?.next,
    });
    window.scrollTo(0, 0);
  };

  const handleSearch = (e) => {
    setVariables({
      ...variables,
      page: 0,
      filter: {
        ...variables.filter,
        [e.target.name]: e.target.value,
      },
    });
  };

  useEffect(() => {
    query({ variables });
  }, [variables]);

  return (
    <section className="episodes">
      <div className="episodes__header">
        <h1 className="episodes__header-title">
          {
            `Total episodes: ${!loading ? data?.episodes.info?.count : !error ? 'loading...' : ''} 
            | Pages: ${!loading ? data?.episodes.info?.pages : !error ? 'loading...' : ''}`
          }
        </h1>
        <input
          type="text"
          name="name"
          className="episodes__header-search"
          placeholder="Search by name"
          value={variables.filter.name}
          onChange={handleSearch}
        />
        <div className="episodes__prevandnext">
          <button type="button" onClick={handlePrev} disabled={data?.episodes.info?.prev ? false : true}>
            {`Prev page ${prevPage}`}
          </button>
          <button type="button" onClick={handleNext} disabled={data?.episodes.info?.next ? false : true}>
            {`Next page ${nextPage}`}
          </button>
        </div>
      </div>
      <div className="episodes__content">
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {
          data?.episodes.results?.map((episode) => (
            <CardEpisodes key={episode.id} {...episode} />
          ))
        }
      </div>
      <div className="episodes__prevandnext">
        <button type="button" onClick={handlePrev} disabled={data?.episodes.info?.prev ? false : true}>
          {`Prev page ${prevPage}`}
        </button>
        <button type="button" onClick={handleNext} disabled={data?.episodes.info?.next ? false : true}>
          {`Next page ${nextPage}`}
        </button>
      </div>
    </section>
  );
};

export default Episodes;
