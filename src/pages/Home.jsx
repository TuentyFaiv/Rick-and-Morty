import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CHARACTERS } from '@queries';

const Home = () => {
  const [query, { loading, data }] = useLazyQuery(CHARACTERS);
  useEffect(() => {
    query();
  }, []);
  
  console.log(data);
  return (
    <h1>Content</h1>
  )
};

export default Home;
