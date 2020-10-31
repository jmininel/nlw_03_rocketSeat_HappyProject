import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphaneagesMap from './pages/OrphanagesMap';
import Orphaneages from './pages/Orphanage';
import CreateOrphaneages from './pages/CreateOrphanage';


function Routes() {
    return (
      <BrowserRouter>
         <Switch>
           <Route path="/" exact component={Landing} />
           <Route path="/app" component={OrphaneagesMap} />
           
           <Route path="/orphanages/create" component={CreateOrphaneages} />
           <Route path="/orphanages/:id" component={Orphaneages} />

         </Switch>
      </BrowserRouter>
    );
}

export default Routes;