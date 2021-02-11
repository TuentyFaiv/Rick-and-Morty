import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Characters from '@pages/Characters';
import Locations from '@pages/Locations';
import Episodes from '@pages/Episodes';
import NotFound from '@pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/episodes" component={Episodes} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
