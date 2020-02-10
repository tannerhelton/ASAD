import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../Containers/Series';
import SingleSeries from '../../Containers/SingleSeries';

export default function Main(props) {
    return (
        <Switch>
            <Route exact path="/" component={Series} />
            <Route path="/series/:id" component={SingleSeries} />
        </Switch>
    );
}