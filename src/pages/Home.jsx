import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CHARACTERS_BY_IDS, LOCATIONS_BY_IDS, EPISODES_BY_IDS } from '@queries';

import '@styles/pages/home.scss';
import CardHome from '@components/CardHome';

const Home = () => {
  const [characters, { loading: loadingC, data: data_characters }] = useLazyQuery(CHARACTERS_BY_IDS);
  const [locations, { loading: loadingL, data: data_locations }] = useLazyQuery(LOCATIONS_BY_IDS);
  const [episodes, { loading: loadingE, data: data_episodes }] = useLazyQuery(EPISODES_BY_IDS);
  const ids = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    characters({ variables: { ids } });
    locations({ variables: { ids } });
    episodes({ variables: { ids } });
  }, []);

  return (
    <>
      <section className="hero">
        <h1 className="hero__title">Rick and Morty</h1>
      </section>
      <section className="section">
        <h2 className="section__title">Characters</h2>
        <div className="section__content ptb-6">
          {loadingC && <h3>Loading...</h3>}
          {
            data_characters?.characters?.map((character) => (
              <CardHome key={character.id} {...character} type="character" />
            ))
          }
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">Locations</h2>
        <div className="section__content">
          {loadingL && <h3>Loading...</h3>}
          {
            data_locations?.locations?.map((location) => (
              <CardHome key={location.id} {...location} type="location" />
            ))
          }
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">Episodes</h2>
        <div className="section__content">
          {loadingE && <h3>Loading...</h3>}
          {
            data_episodes?.episodes?.map((episode) => (
              <CardHome key={episode.id} {...episode} type="episode" />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Home;
