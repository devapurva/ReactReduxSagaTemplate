import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CounterContainer from './pages/Counter';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={CounterContainer} />
        </Switch>
    );
}
