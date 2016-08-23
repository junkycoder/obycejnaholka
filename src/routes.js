import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './web/Layout';

import Home from './pages/Home';
import Trips from './pages/Trips';
import FoodAndDrink from './pages/FoodAndDrink';
import ContactMe from './pages/ContactMe';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="domu" component={Home} />
    <Route path="vylety" component={Trips} />
    <Route path="jidlo-a-piti" component={FoodAndDrink} />
    <Route path="napiste-mi" component={ContactMe} />
  </Route>
);
