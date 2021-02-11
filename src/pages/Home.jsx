import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CHARACTERS_BY_IDS, LOCATIONS_BY_IDS, EPISODES_BY_IDS } from '@queries';

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
      <section>
        <h2>Characters</h2>
        {loadingC && <h3>Loading...</h3>}
        {
          data_characters?.characters?.map(({ name }) => (
            <p>{name}</p>
          ))
        }
      </section>
      <section>
        <h2>Locations</h2>
        {loadingL && <h3>Loading...</h3>}
        {
          data_locations?.locations?.map(({ name }) => (
            <p>{name}</p>
          ))
        }
      </section>
      <section>
        <h2>Episodes</h2>
        {loadingE && <h3>Loading...</h3>}
        {
          data_episodes?.episodes?.map(({ name }) => (
            <p>{name}</p>
          ))
        }
      </section>
    </>
  );
};

export default Home;
